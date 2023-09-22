import { MongoDoc } from "@/server/mongoose";
import { ObjectId } from "mongoose";

export interface QuestionInput {
    title: string;
    body: string;
    tags: string[];
}

export type Question  = QuestionInput & {
    user: ObjectId;
    upvotes: ObjectId[];
    downvotes: ObjectId[];
    answers: ObjectId[];
    comments: ObjectId[];
    time: Date;
    verified: ObjectId;
    open: boolean;
}

export interface QuestionBasic {
    title: string,
    tags: string[],
    open: boolean,
    user: {
        name: string,
    }
};

export type QuestionDocument = MongoDoc<Question>;
