import { NextRequest } from "next/server";
import { addTask, checker } from "./check";

export async function GET(req:NextRequest, res:Response){
   const response = await checker();
   return Response.json(response)
}

export async function POST(req:NextRequest, res:Response){
    const data = await req.json();
    const add = addTask(data.task, data.state, data.email);
    return Response.json(add)
}