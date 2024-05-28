import { clPromise } from "../mongodb";
import bcrypt from "bcrypt";
export async function checkUser({email, username, password}:{email:string, username:string, password:string}){
    const client = await clPromise;
   await  client.connect()
   console.log('connected')
   const db =  client.db('BibleApp');
   const col = db.collection('Users');

   // this works
   const findUser = await col.findOne({email:email}) 
   const match = await bcrypt.compare(password, findUser?.passwordHash as string)
   if (match){
    return findUser
   }

   return {};
//    console.log(match)

//    const passwordHash = await bcrypt.hash(password, 10)
//    const res = await col.insertOne({email, username, passwordHash})
//    if (res.acknowledged ){
//     return res;
//    }



   
}