import { MongoDoc } from "@/server/mongoose";
import { ObjectId } from "mongoose";


export interface AnswerInput {
    content: ObjectId;
};

export interface Answer {
    user: ObjectId;
    question: ObjectId;
 
    content: ObjectId;
 
    upvotes: ObjectId[];
    downvotes: ObjectId[];
 
    comments: ObjectId[];
    time: Date;
};

export type AnswerDocument = MongoDoc<Answer>;
