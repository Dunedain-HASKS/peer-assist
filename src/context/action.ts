"use server";

import { createTokenWithUserName, verifyToken } from "@/server/services/auth.service";

export async function loginAction({ username, password }: {
    username: string;
    password: string;
}) {
    try {
        const access_token = await createTokenWithUserName({ username, password });
        return {
            message: "success",
            session: {
                token: access_token
            }
        }
    }
    catch (e: any) {
        return {
            message: e.message,
            session: null
        }
    }
}

export async function verifyAction({ token }: {
    token: string;
}) {
    try {
        const data = await verifyToken({ token }) ;
        return {
            message: "success",
            id: data.id
        }
    }
    catch (e: any) {
        return {
            message: e.message,
            id: null
        }
    }
}