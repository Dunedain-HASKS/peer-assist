"use server";

import { getQuestion } from "@/server/services/question.service";
import { getUser } from "@/server/services/user.service";

export async function fetchUser({ id }: { id: string }) {
    const user = await getUser({ userId: id });
    return {
        user
    };
}

export async function fetchQuestion({ id }: { id: string }) {
    const question = await getQuestion({ questionId: id });
    return {
        question
    }
};