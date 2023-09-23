"use server";

import { SessionInterface } from "@/context/session";
import { verifyToken } from "@/server/services/auth.service";
import { createQuestion } from "@/server/services/question.service";
import { QuestionInput } from "@/types/question.interface";

export async function postQuestion({ question_input, session }: { question_input: QuestionInput, session: SessionInterface }) {
    const { token } = session;
    const { id } = verifyToken({ token });
    const question = await createQuestion({ question_input, userId: id });
    console.log(question);
    return {
        questionId: question._id,
    }
}