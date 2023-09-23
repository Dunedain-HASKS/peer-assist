"use server";

import { SessionInterface } from "@/context/session";
import { verifyToken } from "@/server/services/auth.service";
import { getQuestionThread, postCommentToQuestion, voteQuestion } from "@/server/services/question.service";
import { CommentInput } from "@/types/comment.interface";
import { PostStatus } from "@/types/question.interface";

export async function fetchThread({ questionId }: { questionId: string }) {
    const question = await getQuestionThread({ questionId });
    return {
        question,
    }
};

export async function fetchQuestionStatus({ questionId, session }: { questionId: string, session: SessionInterface }) {
    if (!session)
        return null;
    const { id: userId } = verifyToken(session);
    const question = await getQuestionThread({ questionId });
    const status: PostStatus = {
        balance: question.upvotes.length - question.downvotes.length,
        status: "none"
    };
    if ((question.upvotes as string[]).includes(userId)) status.status = "upvote";
    if ((question.downvotes as string[]).includes(userId)) status.status = "downvote";
    return {
        ...status
    };
}

export async function postComment({ questionId, comment_input, session }: {
    questionId: string,
    comment_input: CommentInput,
    session: SessionInterface,
}) {
    if (!session)
        return null;
    const { id } = verifyToken(session);
    const comment = await postCommentToQuestion({ questionId, comment_input, userId: id });
    return comment;
};

export async function upvoteQuestion({ questionId, session }: {
    questionId: string,
    session: SessionInterface,
}) {
    if (!session)
        return null;
    const { id } = verifyToken(session);
    await voteQuestion({ questionId, vote: "upvote", userId: id });
}

export async function downvoteQuestion({ questionId, session }: {
    questionId: string,
    session: SessionInterface,
}) {
    if (!session)
        return null;
    const { id } = verifyToken(session);
    await voteQuestion({ questionId, vote: "downvote", userId: id });
}

