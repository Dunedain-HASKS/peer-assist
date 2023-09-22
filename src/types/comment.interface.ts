import { MongoDoc } from "@/server/mongoose";
import { ObjectId } from "mongoose";

export interface CommentInput {
    content: string;
};

export type Comment = CommentInput & {
    user: ObjectId;
    time: Date;
};

export type CommentDocument = MongoDoc<Comment>;