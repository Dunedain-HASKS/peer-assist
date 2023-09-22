import { CommentInput } from "@/types/comment.interface";

export const getAnswer = async ({ answerId }: { answerId: string }) => {
    // 
};

export const voteAnswer = async ({ answerId, vote, userId }: { answerId: string, vote: "upvote" | "downvote", userId: string }) => {
    //
};

export const deleteAnswer = async ({ answerId }: { answerId: string }) => {
    // 
};

export const updateAnswer = async ({ answerId, answer }: { answerId: string, answer: string }) => {
    // 
};

export const postComment = async ({ answerId, comment, userId }: { answerId: string, comment: CommentInput, userId: string }) => {
    // 
};