import { MongoDoc } from "@/server/mongoose";

export interface QuestionInput {
    title: string;
    body: string;
    tags: string[];
}

export type Question  = QuestionInput & {
    user: string;
    upvotes: string[];
    downvotes: string[];
    answers: string[];
    comments: string[];
    time: Date;
}

export interface QuestionBasic {
    title: string,
    tags: string[],
    user: {
        name: string,
    }
};

export type QuestionDocument = MongoDoc<Question>;
