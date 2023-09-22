import { Question } from "@/types/question.interface";
import { Model, Schema, model, models } from "mongoose";

const QuestionSchema = new Schema<Question>({
    title: { type: String, required: true },
    body: { type: String, required: true },
    tags: [{ type: String }],
    user: { type: Schema.Types.ObjectId, ref: "User" },
    answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    upvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    downvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    time: { type: Date, default: Date.now },
    open: { type: Boolean, default: true }
});

QuestionSchema.index({ title: "text", body: "text" });

export const QuestionModel: Model<Question> = models["Question"] ?? model<Question>("Question", QuestionSchema);