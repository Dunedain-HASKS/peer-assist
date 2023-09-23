"use server";

import { getComment } from "@/server/services/comment.service";
import { getQuestion } from "@/server/services/question.service";
import { getUser } from "@/server/services/user.service";

export async function fetchUser({ userId }: { userId: string }) {
    const user = await getUser({ userId });
    return {
        user
    };
}

export async function fetchQuestion({ questionId }: { questionId: string }) {
    const question = await getQuestion({ questionId });
    return {
        question
    }
};

export async function fetchComment({ commentId }: { commentId: string }) {
    const comment = await getComment({ commentId });
    return {
        comment
    }
};

