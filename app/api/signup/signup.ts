import { clPromise } from "../mongodb";
import bcrypt from "bcrypt";
export async function createUser({email, username, password}:{email:string, username:string, password:string}){
    const client = await clPromise;
   await  client.connect()
   console.log('connected')
   const db =  client.db('BibleApp');
   const col = db.collection('Users');

   const passwordHash = await bcrypt.hash(password, 10)
   const res = await col.insertOne({email, username, passwordHash})
   if (res.acknowledged ){
    return res;
   }


// this works
//    const findTest = await col.findOne({username:'bsb'}) 
//    const match = await bcrypt.compare('ayomide*2007', findTest?.passwordHash as string)
//    console.log(match)
   
}