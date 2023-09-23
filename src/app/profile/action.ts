"use server";

import { SessionInterface } from "@/context/session";
import { verifyToken } from "@/server/services/auth.service";
import { getProfile } from "@/server/services/user.service";

export async function fetchProfile(session: SessionInterface) {
    const { id } = verifyToken(session);
    const user = await getProfile({userId: id});
    return {
        user
    };
}