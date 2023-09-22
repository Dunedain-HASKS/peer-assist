import { Answer } from "@/types/answer.interface";
import { Model, Schema, model } from "mongoose";

const AnswerSchema = new Schema<Answer>({
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    question: { type: Schema.Types.ObjectId, ref: "Question" },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    upvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    downvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    time: { type: Date, default: Date.now }
});

export const AnswerModel : Model<Answer> = model<Answer>("Answer", AnswerSchema);