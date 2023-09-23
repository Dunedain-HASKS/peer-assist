"use server";

import { getProfile } from "@/server/services/user.service";

export async function fetchUser({ id }: { id: string }) {
    const user = await getProfile({ userId: id });
    return { user };
}