"use server";

import { getQuestions } from "@/server/services/question.service";

export default async function fetchQuestions({ query }: { query: string }) {
    const questions = await getQuestions({ query });
    return { questions };
}