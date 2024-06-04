import { clPromise } from "../mongodb";
import bcrypt from "bcrypt";
//no longer used
export async function checkUser({
  email,
  username,
  password,
}: {
  email: string;
  username: string;
  password: string;
}) {
  const client = await clPromise;
  //    await  client.connect()
  //    console.log('connected')
  const db = client.db("BibleApp");
  const col = db.collection("Users");

  // this works
  const findUser = await col.findOne({ email: email });
  if (findUser == null) {
    return { error: "User account not found", status: "403" };
  }
  const match = await bcrypt.compare(
    password,
    findUser?.passwordHash as string
  );
  if (match) {
    return findUser;
  } else {
    return { error: "Incorrect Password", status: "403" };
  }

  //    return {};
  //    console.log(match)

  //    const passwordHash = await bcrypt.hash(password, 10)
  //    const res = await col.insertOne({email, username, passwordHash})
  //    if (res.acknowledged ){
  //     return res;
  //    }
}
export async function AddDailyPlan({numberPerDay, numberPerWeek, email}:{numberPerDay?:number, numberPerWeek?:number, email:string }){
  const client = await clPromise;
  const db = client.db("test");
  const col = db.collection("users");
  if(numberPerDay !== 0){
    const update = {
      $set:{
        "readingPlan.type": "daily",
        "readingPlan.numberPerType":numberPerDay
      }
    }
    col.updateOne({email}, update)
  }else if(numberPerWeek !== 0){
    const update = {
      $set:{
        "readingPlan.type": "weekly",
        "readingPlan.numberPerType":numberPerWeek
      }
    }
    col.updateOne({email}, update)  
  }
}