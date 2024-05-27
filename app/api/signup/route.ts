import { NextRequest, NextResponse } from "next/server";
import { createUser } from "./signup";
export async function POST(req:NextRequest, res:NextResponse){
    const data = await req.json();
    createUser(data)
    return Response.json(data)
}