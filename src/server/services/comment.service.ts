import { CommentModel } from "../models/comment.model";

export const getComment = async ({ commentId }: { commentId: string }) => {
    const comment = await CommentModel.findById(commentId);
    if (!comment) throw new Error("Comment not found");
    return comment;
};

export const deleteComment = async ({ commentId }: { commentId: string }) => {
    await CommentModel.findByIdAndDelete(commentId);
};