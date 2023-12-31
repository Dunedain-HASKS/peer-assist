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
        _id: string,
        username: string,
    }
    verified: string | ObjectId;
    balance: number,
    answers: number,
};

export interface PostStatus {
    balance: number,
    status: "upvote" | "downvote" | "none";
}

export type QuestionDocument = MongoDoc<Question>;
