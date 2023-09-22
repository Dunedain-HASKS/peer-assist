"use client";

import { useAuth } from "@/context/session";
import { User } from "@/types/user.interface";
import { useState, useEffect } from "react";
import { fetchProfile } from "./action";

export default function Page() {
    const { session } = useAuth();
    const [profile, setProfile] = useState({});
    useEffect(() => {
        fetchProfile(session).then(({ user }) => {
            setProfile(user);
        });
    }, [session]);
    return (
        <>
            <h1>User</h1>
            <p>{JSON.stringify(profile)}</p>
        </>
    );
}