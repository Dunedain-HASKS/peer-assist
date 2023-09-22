import { MongoDoc } from "@/server/mongoose";

export interface UserBasic {
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
    organization: string;
    questions: string[];
    answers: string[];
    registered: Date;
    upvote: number;
};

export type UserDocument = MongoDoc<User>;



