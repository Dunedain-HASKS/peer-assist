"use server";

import { getUsersByQuery } from "@/server/services/user.service";

export async function fetchUsers({ query, pageNumber }: { query: string, pageNumber: number }) {
    const users = await getUsersByQuery(query, pageNumber);
    return { users };
};