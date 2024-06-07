import { NextRequest } from "next/server";
import { addFav, getFav } from "./addVerse";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";
export async function GET(req:NextRequest, res:Response){
    const session = await getServerSession({req, res, ...options});
    const data = await getFav(session?.user?.email as string);
    return Response.json(data)
}
export async function POST(req:NextRequest, res:Response){
    const data = await req.json();
    addFav(data.verse, data.email, data.version);
    return Response.json(data)
}
export async function DELETE(req: Request, res:Response) {
   
}