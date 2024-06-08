import { NextRequest, NextResponse } from "next/server";
import sendMessage from "./contact";
export async function POST(req:Request, res:Response){
    try{
        const data = await req.json();
        await  sendMessage(data)
        console.log(data)
      return  Response.json({message:"Sent successfuly"})
    }catch(e:any){
      console.log(e.message)
    }
}
export async function GET(req: NextRequest){
    return NextResponse.json({message:"hello ayo, you're probably the only one here"});
}