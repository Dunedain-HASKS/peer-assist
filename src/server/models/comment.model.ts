import { Comment } from "@/types/comment.interface";
import { Model, Schema, model } from "mongoose";

const CommentSchema = new Schema<Comment>({
  content: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  time: { type: Date, default: Date.now },
});

export const CommentModel : Model<Comment> = model<Comment>("Comment", CommentSchema);