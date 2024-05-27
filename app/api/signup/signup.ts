import { clPromise } from "../mongodb";

export async function createUser({email, username, password}:{email:string, username:string, password:string}){
    const client = await clPromise;
   await  client.connect()
//    const db = await client.db('hey')
    console.log('connected')
}