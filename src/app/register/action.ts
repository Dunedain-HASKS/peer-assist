"use server";

import { createUser } from "@/server/services/user.service";
import { UserInput } from "@/types/user.interface";

export async function postUser({ user_input }: { user_input: UserInput }) {
    try {
        const user = await createUser({ user_input });
        return { user, message: "User created successfully" };
    }
    catch (error : any) {
        return { user: null, message: error.message };
    }
}