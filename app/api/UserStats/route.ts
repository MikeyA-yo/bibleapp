import { NextRequest, NextResponse } from "next/server";
import { GetUserStats, UserStats, createUser } from "./signup";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";
export async function POST(req:NextRequest, res:NextResponse){
    const data = await req.json();
    UserStats(data.email)
    return Response.json(data)
}
export async function GET(req:NextRequest, res:NextResponse){
    const session = await getServerSession({req, res, ...options})
    const data = await GetUserStats(session?.user?.email as string);
    return Response.json(data);
}