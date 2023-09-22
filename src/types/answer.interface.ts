import { MongoDoc } from "@/server/mongoose";


export interface AnswerInput {
    content: string;
};

export interface Answer {
    user: string;
    question: string;
 
    content: string;
 
    upvotes: string[];
    downvotes: string[];
 
    comments: string[];
    time: Date;
};

export type AnswerDocument = MongoDoc<Answer>;
