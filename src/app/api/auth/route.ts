import { NextRequest, NextResponse } from "next/server";
import { createTokenWithUserName, createTokenWithEmail } from "@/server/services/auth.service";

export async function POST(request: NextRequest, context: any) {
    const { user } = await request.json();
    const newToken = await createTokenWithEmail({ email: user.email, password: user.password });
    return NextResponse.json({ newToken }, { status: 200 });
};