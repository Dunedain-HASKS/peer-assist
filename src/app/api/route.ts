import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest, context: any) {
    return NextResponse.redirect("/");
} ; 
