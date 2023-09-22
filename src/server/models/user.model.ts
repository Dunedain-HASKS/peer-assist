import { User } from "@/types/user.interface";
import { Model, Schema, model, models } from "mongoose";

const UserSchema = new Schema<User>({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true, index: true },
    first_name: { type: String, required: true },
    last_name: { type: String },
    password: { type: String, required: true },
    bio: { type: String },
    organization: { type: String },
    questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
    answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
    upvote: { type: Number, default: 0 },
    registered: { type: Date, default: Date.now }
});

export const UserModel: Model<User> = models["User"] ?? model<User>("User", UserSchema);


