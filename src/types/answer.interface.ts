import { MongoDoc } from "@/server/mongoose";
import { ObjectId } from "mongoose";


export interface AnswerInput {
    content: string | ObjectId;
};

export interface Answer {
    user: string | ObjectId;
    question: string | ObjectId;

    content: string | ObjectId;

    upvotes: ObjectId[];
    downvotes: ObjectId[];

    comments: ObjectId[];
    time: Date;
};

export type AnswerDocument = MongoDoc<Answer>;
