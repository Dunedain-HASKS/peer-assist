"use server";

import { SessionInterface } from "@/context/session";
import { verifyToken } from "@/server/services/auth.service";
import { getProfile } from "@/server/services/user.service";

export async function fetchProfile(session: SessionInterface) {
    if (!session) return {
        profile: null,
        message: "You are not logged in"
    };
    const { id } = verifyToken(session);
    const profile = await getProfile({ userId: id });
    return {
        profile,
        message: "Profile fetched successfully"
    };
};