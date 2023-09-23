import { UserInput } from "@/types/user.interface";
import { faker } from "@faker-js/faker";
import { createUser } from "../services/user.service";
import { Question, QuestionInput } from "@/types/question.interface";
import { createQuestion, postCommentToQuestion } from "../services/question.service";
import { AnswerInput } from "@/types/answer.interface";
import { postAnswer, postCommentToAnswer } from "../services/answer.service";
import { CommentInput } from "@/types/comment.interface";
const NUM_OF_USERS = 100;
const NUM_OF_QUESTIONS = 200;
const NUM_OF_ANSWERS = 400;
const NUM_OF_ANSWER_COMMENTS = 300;
const NUM_OF_QUESTION_COMMENTS = 200;

const domains = ["daiict.ac.in", "iit.ac.in", "nit.ac.in", "iiit.ac.in", "iim.ac.in", "iisc.ac.in", "iiser.ac.in", "iisertvm.ac.in", "iiserm.ac.in"];

const generateUser = (): UserInput => {
    const username = faker.internet.userName();
    const email = `${username}@${domains[Math.floor(Math.random() * domains.length)]}`;
    return {
        username: username,
        email: email,
        password: faker.internet.password(),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        bio: faker.company.buzzVerb() + " " + faker.company.buzzVerb() + " " + faker.company.buzzNoun(),
    };
};


export const generateData = async () => {
    const users = [];
    for (let i = 0; i < NUM_OF_USERS; i++) {
        users.push(generateUser());
    }
    const userIds = await Promise.all(users.map(async (user_input) => {
        const user = await createUser({ user_input });
        return String(user._id);
    }));
    const questions: QuestionInput[] = [];
    for (let i = 0; i < NUM_OF_QUESTIONS; i++) {
        questions.push({
            title: faker.lorem.sentence(),
            body: faker.lorem.paragraph(),
            tags: [faker.company.buzzNoun(), faker.company.buzzNoun(), faker.company.buzzNoun()],
        });
    }
    const questionIds = await Promise.all(questions.map(async (question_input) => {
        const question = await createQuestion({ question_input, userId: userIds[Math.floor(Math.random() * userIds.length)] });
        return String(question._id);
    }));

    const answers: AnswerInput[] = [];

    for (let i = 0; i < NUM_OF_ANSWERS; i++) {
        answers.push({
            content: faker.lorem.paragraph(),
        });
    }

    const answerIds = await Promise.all(answers.map(async (answer_input) => {
        const answer = await postAnswer({ answer_input, userId: userIds[Math.floor(Math.random() * userIds.length)], questionId: questionIds[Math.floor(Math.random() * questionIds.length)] });
        return String(answer._id);
    }));

    const question_comments: CommentInput[] = [];

    for(let i = 0; i < NUM_OF_QUESTION_COMMENTS; i++) {
        question_comments.push({
            content: faker.lorem.paragraph(),
        });
    }

    await Promise.all(question_comments.map(async (comment_input) => {
        const comment = await postCommentToQuestion({ comment_input, userId: userIds[Math.floor(Math.random() * userIds.length)], questionId: questionIds[Math.floor(Math.random() * questionIds.length)] });
    }));

    const answer_comments: CommentInput[] = [];

    for(let i = 0; i < NUM_OF_ANSWER_COMMENTS; i++) {
        answer_comments.push({
            content: faker.lorem.paragraph(),
        });
    }

    await Promise.all(answer_comments.map(async (comment_input) => {
        const comment = await postCommentToAnswer({ comment_input, userId: userIds[Math.floor(Math.random() * userIds.length)], answerId: answerIds[Math.floor(Math.random() * answerIds.length)] });
    }));

};


