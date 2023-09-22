import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest, context: any) {
    const body = await request.json();
    console.log(body);
    return NextResponse.json({ message: "Hello world" }, { status: 200 });
};