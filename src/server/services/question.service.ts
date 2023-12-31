import { CommentInput } from "@/types/comment.interface";
import { Question, QuestionBasic, QuestionInput } from "@/types/question.interface";
import { QuestionModel } from "../models/question.model";
import { UserModel } from "../models/user.model";
import { CommentModel } from "../models/comment.model";


function createRegexPattern(input: string) {
    const pattern = Array.from(input).map((char) => {
        if ((char < 'a' || char > 'z') && (char < 'A' || char > 'Z')) return `[\\${char}]`;
        char = char.toLowerCase();
        return `[${char}${char.toUpperCase()}]`
    }).join('');
    return new RegExp(`/.*${pattern}.*/`);
};

export const getQuestions = async ({ query, pageNumber }: { query: string, pageNumber: number }): Promise<string[]> => {

    const questions = await QuestionModel.find({
        body: {
            $regex: `(.)*(?i)${query}(?-i)(.)*`,
        }
    }).skip(pageNumber * 8).limit(8);
    return questions.map((question) => String(question._id))
};

export const getQuestion = async ({ questionId }: { questionId: string }): Promise<QuestionBasic> => {
    const question = await QuestionModel.findById(questionId);
    if (!question) throw new Error("Question not found");
    const user = await UserModel.findById(question.user.toString());
    if (!user) throw new Error("User not found");
    return {
        _id: String(question._id),
        title: question.title,
        tags: question.tags,
        open: question.open,
        user: {
            _id: user._id.toString(),
            username: user?.username || "",
        },
        verified: question.verified ? "true" : "false",
        balance: question.upvotes.length - question.downvotes.length,
        answers: question.answers.length,
    };
};

export const getQuestionThread = async ({ questionId }: { questionId: string }) => {
    const question = await QuestionModel.findById(questionId);
    if (!question) throw new Error("Question not found");
    return {
        ...question.toJSON(),
        _id: question._id.toString(),
        user: question.user.toString(),
        comments: question.comments.map((comment) => comment.toString()),
        upvotes: question.upvotes.map((upvote) => upvote.toString()),
        downvotes: question.downvotes.map((downvote) => downvote.toString()),
        answers: question.answers.map((answer) => answer.toString()),
    }
};

export const createQuestion = async ({ question_input, userId }: { question_input: QuestionInput, userId: string }) => {
    const question = await QuestionModel.create({ ...question_input, user: userId, time: new Date() });
    await UserModel.findByIdAndUpdate(userId, {
        $push: {
            questions: question.id,
        }
    });

    return {
        ...question.toJSON(),
        _id: question._id.toString(),
        user: question.user.toString(),
        comments: question.comments.map((comment) => comment.toString()),
        upvotes: question.upvotes.map((upvote) => upvote.toString()),
        downvotes: question.downvotes.map((downvote) => downvote.toString()),
        answers: question.answers.map((answer) => answer.toString()),
    }
};

export const closeQuestion = async ({ questionId }: { questionId: string }) => {
    await QuestionModel.findByIdAndUpdate(questionId, {
        open: false,
    });
};

export const voteQuestion = async ({ questionId, vote, userId }: { questionId: string, vote: "upvote" | "downvote", userId: string }) => {
    if (vote == "upvote") {
        await QuestionModel.findByIdAndUpdate(questionId, {
            $pull: {
                downvotes: userId,
            },
            $addToSet: {
                upvotes: userId,
            }
        });
    }
    else {
        await QuestionModel.findByIdAndUpdate(questionId, {
            $pull: {
                upvotes: userId,
            },
            $addToSet: {
                downvotes: userId,
            }
        });
    }

};

export const deleteQuestion = async ({ questionId }: { questionId: string }) => {
    await QuestionModel.findByIdAndDelete(questionId);
};

export const postCommentToQuestion = async ({ questionId, comment_input, userId }: { questionId: string, comment_input: CommentInput, userId: string }) => {
    const comment = await CommentModel.create({ ...comment_input, user: userId, time: new Date() });
    const question = await QuestionModel.findByIdAndUpdate(questionId, {
        $push: {
            comments: comment.id,
        }
    }, {
        new: true,
    });
};