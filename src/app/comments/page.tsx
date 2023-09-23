import CommentCard from "@/components/CommentCard";
import * as React from 'react';

const data = [
    {
        content: "This is a comment",
        user: "user_id"
    },
    {
        content: "This is a comment2",
        user: "user_id2"
    },
    {
        content: "This is a comment3",
        user: "user_id3"
    }
]

export default function Page() {
    return (
        <>
            {data.map((item: { content: string; user: string; }, index: React.Key | null | undefined) => (
                <CommentCard key={index} id={item} />
            ))}
        </>
    );
}