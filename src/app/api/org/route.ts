import { getOrganizationQuestions } from "@/server/services/organization.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, context: any) {
    const { answer } = await request.json();
    const newAnswer = await getOrganizationQuestions({ organizationId: answer.organizationId });
    return NextResponse.json({ newAnswer }, { status: 200 });
};