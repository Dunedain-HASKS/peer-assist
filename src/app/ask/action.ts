"use server";

import { SessionInterface } from "@/context/session";
import { verifyToken } from "@/server/services/auth.service";
import { createQuestion } from "@/server/services/question.service";
import { QuestionInput } from "@/types/question.interface";

export async function postQuestion({ question_input, session }: { question_input: QuestionInput, session: SessionInterface }) {
    try {
        const { id } = verifyToken(session);
        const question = await createQuestion({ question_input, userId: id });
        return {
            questionId: question._id,
            message: "Question created successfully",
        };
    }
    catch (err: any) {
        return {
            message: err.message,
            questionId: null,
        };
    }
}

