import { Comment } from "@/types/comment.interface";
import { Model, Schema, model, models } from "mongoose";

const CommentSchema = new Schema<Comment>({
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    time: { type: Date, default: Date.now },
});

export const CommentModel: Model<Comment> = models["Comment"] ?? model<Comment>("Comment", CommentSchema);