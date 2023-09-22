import { NextRequest, NextResponse } from "next/server";
import { createUser } from "@/server/services/user.service";

export async function POST(request: NextRequest, context: any) {
    const { user } = await request.json();
    const newUser = await createUser({ user_input: user });
    return NextResponse.json({ newUser }, { status: 200 });
};