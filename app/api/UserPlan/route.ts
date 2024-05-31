import { NextRequest, NextResponse } from "next/server";
import { AddDailyPlan, checkUser } from "./signin";

export async function POST(req:NextRequest, res:NextResponse){
     const data = await req.json();
     AddDailyPlan(data)
     return Response.json(data);
}