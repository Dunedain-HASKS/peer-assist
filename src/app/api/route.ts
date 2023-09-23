import { NextRequest, NextResponse } from "next/server";
import { closeQuestion, getQuestionThread, postCommentToQuestion, postQuestion, voteQuestion } from "@/server/services/question.service";

export async function POST(request: NextRequest, context: any) {
    const { question, userId } = await request.json();
    await postQuestion({ question_input: question, userId });
}; 