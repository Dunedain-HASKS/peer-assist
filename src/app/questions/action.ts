"use server";

import { getQuestions } from "@/server/services/question.service";

export default async function fetchQuestions({ query, pageNumber }: { query: string, pageNumber: number }) {
    const questions = await getQuestions({ query, pageNumber });
    return { questions };
}