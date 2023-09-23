"use server";

import { verifyToken } from "@/server/services/auth.service";
import { getOrganization } from "@/server/services/organization.service";

export async function fetchOrganization({ token }: { token: string }) {
    const { id } = verifyToken({ token });
    const organization = await getOrganization({ userId: id });
    console.log("organization", organization);
    return {
        organization
    };
}

