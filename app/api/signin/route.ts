import { NextRequest, NextResponse } from "next/server";
import { checkUser } from "./signin";

export async function POST(req:NextRequest, res:NextResponse){
     const data = await req.json();
     const user = await checkUser(data);
     return Response.json(user);
}