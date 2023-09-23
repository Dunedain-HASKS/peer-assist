import { generateData } from "@/server/seeds/seed";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest, context: any) {
    await generateData();
    return NextResponse.json({ message: "Data generated" }, { status: 200, statusText: "OK"});
}; 
