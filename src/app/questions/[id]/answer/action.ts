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
    try {
        const { id } = verifyToken(session);
        const answer = await postAnswer({ answer_input, userId: id, questionId: questionId });
        return {
            answer,
            message: "Answer posted successfully",
        }
    }
    catch (err: any) {
        return {
            answer: null,
            message: err.message,
        }
    }
};

