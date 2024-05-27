import { clPromise } from "../mongodb";

export async function createUser({email, username, password}:{email:string, username:string, password:string}){
    const client = await clPromise;
   await  client.connect()
   console.log('connected')
   const db =  client.db('BibleApp');
   const col = db.collection('Users');
   const res = await col.insertOne({email, username, password})
   console.log(res.insertedId, res)

  // const findTest = await col.findOne({email:'b'})

   
}