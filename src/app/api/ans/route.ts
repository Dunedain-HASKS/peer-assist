import { createAnswer, deleteAnswer, getAnswer, postComment, updateAnswer, voteAnswer } from "@/server/services/answer.service";
import { deleteComment, getComment } from "@/server/services/comment.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, context: any) {
    const { answer } = await request.json();
    const newAnswer = await deleteComment({ commentId: answer.commentId });
    return NextResponse.json({ newAnswer }, { status: 200 });
};