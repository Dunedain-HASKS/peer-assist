import { MongoDoc } from "@/server/mongoose";

export interface CommentInput {
    content: string;
};

export type Comment = CommentInput & {
    user: string;
    time: Date;
};

export type CommentDocument = MongoDoc<Comment>;