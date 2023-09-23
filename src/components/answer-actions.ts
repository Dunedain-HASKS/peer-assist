"use server";
import { SessionInterface } from "@/context/session";
import { getAnswer, postCommentToAnswer, voteAnswer } from "@/server/services/answer.service";
import { verifyToken } from "@/server/services/auth.service";
import { CommentInput } from "@/types/comment.interface";
import { PostStatus } from "@/types/question.interface";


export async function fetchAnswer({ answerId }: { answerId: string; }) {
    const answer = await getAnswer({ answerId });
    return {
        answer
    };
};

export const fetchAnswerStatus = async ({ answerId, session }: { answerId: string, session: SessionInterface }) => {
    if (!session) return null;
    const { id: userId } = verifyToken(session);
    const answer = await getAnswer({ answerId });
    if (!answer) throw new Error("Answer not found");
    const status = {
        balance: answer.upvotes.length - answer.downvotes.length,
        status: "none"
    };
    if (answer.upvotes.includes(userId)) status.status = "upvote";
    if (answer.downvotes.includes(userId)) status.status = "downvote";
    return {
        ...status
    } as PostStatus;
};

export async function postComment({ answerId, comment_input, session }: {
    answerId: string,
    comment_input: CommentInput,
    session: SessionInterface,
}) {
    if (!session) return null;
    const { id } = verifyToken(session);
    const comment = await postCommentToAnswer({ answerId, comment_input, userId: id });
    return comment;
};

export async function upvoteAnswer({ answerId, session }: {
    answerId: string,
    session: SessionInterface,
}) {
    if (!session) return null;
    const { id } = verifyToken(session);
    await voteAnswer({ answerId, vote: "upvote", userId: id });
}

export async function downvoteAnswer({ answerId, session }: {
    answerId: string,
    session: SessionInterface,
}) {
    if (!session) return null;
    const { id } = verifyToken(session);
    await voteAnswer({ answerId, vote: "downvote", userId: id });
}

