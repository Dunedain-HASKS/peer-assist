import { CommentInput } from "@/types/comment.interface";
import { QuestionInput } from "@/types/question.interface";
import { QuestionModel } from "../models/question.model";

export const getQuestions = async ({ query }: { query: string }) => {
    const questions = await QuestionModel.find({ $text: { $search: query } }, { score: { $meta: "textScore" }, _id: 1 }).sort({ score: { $meta: "textScore" } });
    return questions.map((question) => question._id);
};

export const getQuestion = async ({ questionId }: { questionId: string }) => {
    //  
};

export const getQuestionThread = async ({ questionId }: { questionId: string }) => {
    // 
};

export const postQuestion = async ({ question, userId }: { question: QuestionInput, userId: string }) => {
    //
};

export const voteQuestion = async ({ questionId, vote, userId }: { questionId: string, vote: "upvote" | "downvote", userId: string }) => {
    //
};

export const deleteQuestion = async ({ questionId }: { questionId: string }) => {
    // 
};

export const updateQuestion = async ({ questionId, question }: { questionId: string, question: string }) => {
    // 
};

export const postComment = async ({ questionId, comment, userId }: { questionId: string, comment: CommentInput, userId: string }) => {
    //
};