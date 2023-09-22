import { MongoDoc } from "@/server/mongoose";
import { ObjectId } from "mongoose";

export interface UserBasic {
    _id: string;
    username: string;
    organization: {
        name: string;
    }
};

export interface UserInput {
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    password: string;
    bio: string;
};

export type User = UserInput & {
    organization: string | ObjectId;
    questions: string[] | ObjectId[];
    answers: string[] | ObjectId[];
    registered: Date;
    upvote: number;
};

export type UserDocument = MongoDoc<User>;



