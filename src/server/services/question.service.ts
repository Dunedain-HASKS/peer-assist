import { CommentInput } from "@/types/comment.interface";
import { Question, QuestionBasic, QuestionInput } from "@/types/question.interface";
import { QuestionModel } from "../models/question.model";
import { UserModel } from "../models/user.model";
import { CommentModel } from "../models/comment.model";

export const getQuestions = async ({ query }: { query: string }): Promise<string[]> => {
    const questions = await QuestionModel.find({ $text: { $search: query } }, { score: { $meta: "textScore" }, _id: 1 }).sort({ score: { $meta: "textScore" } });
    return questions.map((question) => String(question._id));
};

export const getQuestion = async ({ questionId }: { questionId: string }): Promise<QuestionBasic> => {
    const question = await QuestionModel.findById(questionId);
    if (!question) throw new Error("Question not found");
    const user = await UserModel.findById(question.user.toString());
    if (!user) throw new Error("User not found");
    return {
        _id: question.id,
        title: question.title,
        tags: question.tags,
        open: question.open,
        user: {
            username: user?.username || "",
        },
        verified: question.verified?"true" : "false",
        balance: question.upvotes.length - question.downvotes.length,
        answers: question.answers.length,
    };
};

export const getQuestionThread = async ({ questionId }: { questionId: string }): Promise<Question> => {
    const question = await QuestionModel.findById(questionId);
    if (!question) throw new Error("Question not found");
    return {
        ...question.toJSON(),
        user: question.user.toString(),
        comments: question.comments.map((comment) => comment.toString()),
        upvotes: question.upvotes.map((upvote) => upvote.toString()),
        downvotes: question.downvotes.map((downvote) => downvote.toString()),
        answers: question.answers.map((answer) => answer.toString()),
    }
};

export const postQuestion = async ({ question_input, userId }: { question_input: QuestionInput, userId: string }) => {
    const question = await QuestionModel.create({ ...question_input, user: userId, time: new Date(), verified: null });
    await UserModel.findByIdAndUpdate(userId, {
        $push: {
            questions: question.id,
        }
    });
  
    return {
        ...question.toJSON(),
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
    await QuestionModel.findByIdAndUpdate(questionId, {
        $push: {
            comments: comment.id,
        }
    });
};