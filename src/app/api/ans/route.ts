import { createAnswer, getAnswer, postComment, updateAnswer, voteAnswer } from "@/server/services/answer.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, context: any) {
    const { answer } = await request.json();
    const newAnswer = await postComment({ answerId: answer.answerId, comment_input: answer.comment_input, userId: answer.userId });
    return NextResponse.json({ newAnswer }, { status: 200 });
};