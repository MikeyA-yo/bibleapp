import { NextRequest, NextResponse } from "next/server";
import { checkUser } from "./signin";

export async function POST(req:NextRequest, res:NextResponse){
     const data = await req.json();
     const user = await checkUser(data);
     if(user === null || user === undefined ){
        //to do return a status code showing user exists
        return {error:"User Not found", status:"404"}
     }
     return Response.json(user);
}