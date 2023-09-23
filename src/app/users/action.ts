"use server";

import { getUsers } from "@/server/services/user.service";

export async function fetchUsers({ query }: { query: string }) {
    const users = await getUsers({ query });
    return { users };
};