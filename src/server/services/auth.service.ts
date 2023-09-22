import { sign } from "jsonwebtoken";
import { UserModel } from "../models/user.model";
import bcrypt from "bcrypt";

const secret = process.env.JWT_SECRET;

export const verifyToken = ({ token }: { token: string }) => {
    // 
};

export const createTokenWithUserName = async ({ username, password }: { username: string, password: string }) => {
    if(secret === undefined) throw new Error("JWT_SECRET is not defined");

    await UserModel.findOne({ username }).then((user) => {
        if(user === null) throw new Error("User not found");
        if(!bcrypt.compare(password, user.password)) throw new Error("Password is incorrect");
    });

    const access_token = sign({ username }, secret, { expiresIn: "12h" });
    return access_token;
};

export const createTokenWithEmail = async ({ email, password }: { email: string, password: string }) => {
    if(secret === undefined) throw new Error("JWT_SECRET is not defined");

    const user = await UserModel.findOne({ email }).then((user) => {
        if(user === null) throw new Error("User not found");
        if(!bcrypt.compare(password, user.password)) throw new Error("Password is incorrect");
        else return user;
    });

    const access_token = sign({ username: user.username }, secret, { expiresIn: "12h" });
    return access_token;
};

export const invalidateToken = ({ token }: { token: string }) => {
    // 
};




