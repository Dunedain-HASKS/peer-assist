"use server";

import { SessionInterface } from "@/context/session";
import { verifyToken } from "@/server/services/auth.service";
import { getOrganization } from "@/server/services/organization.service";

export async function fetchOrganization({ session }: { session: SessionInterface }) {
    if (!session) {
        return {
            message: "You must be logged in to view your organization",
            organization: null
        }
    };

    const { id } = verifyToken(session);
    const organization = await getOrganization({ userId: id });
    return {
        message: "Organization fetched successfully",
        organization
    };
}

