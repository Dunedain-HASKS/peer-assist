"use server";

import { createUser } from "@/server/services/user.service";
import { UserInput } from "@/types/user.interface";

export async function postUser({ user }: { user: UserInput }) {
   return await createUser({ user_input: user });
}