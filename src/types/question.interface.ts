import { MongoDoc } from "@/server/mongoose";
import { ObjectId } from "mongoose";

export interface QuestionInput {
    title: string;
    body: string;
    tags: string[];
}

export type Question = QuestionInput & {
    user: string | ObjectId;
    upvotes: string[] | ObjectId[];
    downvotes: string[] | ObjectId[];
    answers: string[] | ObjectId[];
    comments: string[] | ObjectId[];
    time: Date;
    verified: string | ObjectId;
    open: boolean;
}

export interface QuestionBasic {
    _id: string,
    title: string,
    tags: string[],
    open: boolean,
    user: {
        username: string,
    }
    balance: number,
    answers: number,
};

export interface QuestionStatus {
    balance: number,
    status: "upvote" | "downvote" | "none";
}

export type QuestionDocument = MongoDoc<Question>;
