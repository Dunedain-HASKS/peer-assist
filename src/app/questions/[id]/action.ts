"use server";

import { SessionInterface } from "@/context/session";
import { verifyToken } from "@/server/services/auth.service";
import { getQuestionThread, postCommentToQuestion, voteQuestion } from "@/server/services/question.service";
import { CommentInput } from "@/types/comment.interface";
import { QuestionStatus } from "@/types/question.interface";


export async function getThread({ questionId }: { questionId: string }) {
    return await getQuestionThread({ questionId });
};

export async function getStatus({ questionId }: { questionId: string }) {
    const question = await getQuestionThread({ questionId });
    const status: QuestionStatus = {
        balance: question.upvotes.length - question.downvotes.length,
        status: "none"
    };
    if ((question.upvotes as string[]).includes(questionId)) status.status = "upvote";
    if ((question.downvotes as string[]).includes(questionId)) status.status = "downvote";
    return {
        status
    };
}

export async function postComment({ questionId, comment_input, session }: {
    questionId: string,
    comment_input: CommentInput,
    session: SessionInterface,
}) {
    const { id } = verifyToken(session);
    const comment = await postCommentToQuestion({ questionId, comment_input, userId: id });
    return comment;
};

export async function upvoteQuestion({ questionId, session }: {
    questionId: string,
    session: SessionInterface,
}) {
    const { id } = verifyToken(session);
    await voteQuestion({ questionId, vote: "upvote", userId: id });
}

export async function downvoteQuestion({ questionId, session }: {
    questionId: string,
    session: SessionInterface,
}) {
    const { id } = verifyToken(session);
    await voteQuestion({ questionId, vote: "downvote", userId: id });
}

