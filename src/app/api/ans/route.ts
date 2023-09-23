import { postAnswer, deleteAnswer, getAnswer, postComment, updateAnswer, voteAnswer } from "@/server/services/answer.service";
import { deleteComment, getComment } from "@/server/services/comment.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, context: any) {
    const { answer } = await request.json();
    const newAnswer = await postAnswer({ answer_input: answer.content, userId: answer.userId, questionId: answer.questionId });
    return NextResponse.json({ newAnswer }, { status: 200 });
};