import { sign, verify } from "jsonwebtoken";
import { UserModel } from "../models/user.model";
import bcrypt from "bcrypt";    

const secret = process.env.JWT_SECRET;

export const verifyToken = ({ token }: { token: string }) => {
    if (secret === undefined) throw new Error("JWT_SECRET is not defined");
    const payload = verify(token, secret, (err, decoded) => {
        if (err) throw new Error("Token is invalid");
        return decoded;
    });
    return (payload as any) as { id: string };
};

export const createTokenWithUserName = async ({ username, password }: { username: string, password: string }) => {
    if (secret === undefined) throw new Error("JWT_SECRET is not defined");

    const user = await UserModel.findOne({ username });
    if (user === null) throw new Error("User not found");
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
        throw new Error("Password is incorrect");
    } else {
        const { id } = user;
        const access_token = sign({ id }, secret, { expiresIn: "12h" });
        return access_token;
    }
};

export const createTokenWithEmail = async ({ email, password }: { email: string, password: string }) => {
    if (secret === undefined) throw new Error("JWT_SECRET is not defined");

    const user = await UserModel.findOne({ email });
    if (user === null) throw new Error("User not found");
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
        throw new Error("Password is incorrect");
    } else {
        const { id } = user;
        const access_token = sign({ id }, secret, { expiresIn: "12h" });
        return access_token;
    }
};

export const invalidateToken = ({ token }: { token: string }) => {
    //
};