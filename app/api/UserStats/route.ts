import { NextRequest, NextResponse } from "next/server";
import { UserStats, createUser } from "./signup";
export async function POST(req:NextRequest, res:NextResponse){
    const data = await req.json();
    UserStats(data.email)
    return Response.json(data)
}