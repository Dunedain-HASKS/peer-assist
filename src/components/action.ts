"use server";

import { getUser } from "@/server/services/user.service";

export async function fetchUser({ id }: { id: string }) {
    const user = await getUser({ userId: id });
    return {
        user
    };
}