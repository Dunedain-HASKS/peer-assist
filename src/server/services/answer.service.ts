import { CommentInput } from "@/types/comment.interface";
import { AnswerModel } from "../models/answer.model";
import { Answer, AnswerInput } from "@/types/answer.interface";
import { CommentModel } from "../models/comment.model";
import { QuestionModel } from "../models/question.model";

export const getAnswer = async ({ answerId }: { answerId: string }) => {
    const answer = await AnswerModel.findById(answerId);
    if (!answer) throw new Error("Answer not found");
    return {
        ...answer.toJSON(),
        _id: answer._id.toString(),
        user: answer.user.toString(),
        question: answer.question.toString(),
        upvotes: answer.upvotes.map((upvote) => upvote.toString()),
        downvotes: answer.downvotes.map((downvote) => downvote.toString()),
        comments: answer.comments.map((comment) => comment.toString()),
    };
};

export const voteAnswer = async ({ answerId, vote, userId }: { answerId: string, vote: "upvote" | "downvote", userId: string }) => {
    if (vote == "upvote") {
        await AnswerModel.findByIdAndUpdate(answerId, {
            $pull: {
                downvotes: userId,
            },
            $addToSet: {
                upvotes: userId,
            }
        });
    }
    else {
        await AnswerModel.findByIdAndUpdate(answerId, {
            $pull: {
                upvotes: userId,
            },
            $addToSet: {
                downvotes: userId,
            }
        });
    }
};

export const deleteAnswer = async ({ answerId }: { answerId: string }) => {
    await AnswerModel.findByIdAndDelete(answerId);
};

export const updateAnswer = async ({ answerId, answer }: { answerId: string, answer: any }) => {
    await AnswerModel.findByIdAndUpdate(answerId, { ...answer, time: new Date() });
};

export const postCommentToAnswer = async ({ answerId, comment_input, userId }: { answerId: string, comment_input: CommentInput, userId: string }) => {
    const comment = await CommentModel.create({ ...comment_input, user: userId, time: new Date() });
    await AnswerModel.findByIdAndUpdate(answerId, {
        $addToSet: {
            comments: comment.id
        }
    });
};

export const postAnswer = async ({ answer_input, userId, questionId }: { answer_input: AnswerInput, userId: string, questionId: string }) => {
    const existingAnswer = await AnswerModel.findOne({ user: userId, question: questionId });
    if (existingAnswer) {
        throw new Error('User has already posted an answer for this question');
    }
    const answer = await AnswerModel.create({ content: answer_input.content, user: userId, question: questionId, time: new Date() });
    await QuestionModel.findByIdAndUpdate(questionId, {
        $push: {
            answers: answer.id,
        }
    });
    return {
        ...answer.toJSON(),
        user: answer.user.toString(),
        question: answer.question.toString(),
    }
};
