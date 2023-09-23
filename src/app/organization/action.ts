"use server";

import { SessionInterface } from "@/context/session";
import { verifyToken } from "@/server/services/auth.service";
import { getOrganization } from "@/server/services/organization.service";

export async function fetchOrganization({ session }: { session: SessionInterface }) {
    try {
        const { id } = verifyToken(session);
        const organization = await getOrganization({ userId: id });
        return {
            message: "Organization fetched successfully",
            organization
        };
    }
    catch (err: any) {
        return {
            message: err.message,
            organization: null,
        };
    };
}

