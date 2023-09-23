"use server";

import { SessionInterface } from "@/context/session";
import { postAnswer } from "@/server/services/answer.service";
import { verifyToken } from "@/server/services/auth.service";
import { AnswerInput } from "@/types/answer.interface";

export async function postAnswerAction({ answer_input, session, questionId }: {
    answer_input: AnswerInput,
    session: SessionInterface,
    questionId: string,
}) {
    if (!session)
        return {
            message: "You are not logged in",
            answer: null,
        };
    const { id } = verifyToken(session);
    const answer = await postAnswer({ answer_input, userId: id, questionId: questionId });
    return {
        answer,
        message: "Answer posted successfully",
    }
};

