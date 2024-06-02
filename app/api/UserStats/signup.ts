import { clPromise } from "../mongodb";
import bcrypt from "bcrypt";
// import { verifyUser } from "./verifyEmail";
export async function createUser({
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
  const existingUser = await col.findOne({ email });
  if (existingUser) {
    return { error: "User Already Exists", status: "403" };
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const res = await col.insertOne({ email, username, passwordHash });
  if (res.acknowledged) {
    return res;
  } else {
    return { error: "creation failed", status: "500" };
  }

  // this works
  //    const findTest = await col.findOne({username:'bsb'})
  //    const match = await bcrypt.compare('ayomide*2007', findTest?.passwordHash as string)
  //    console.log(match)
}
export async function UserStats(email: string) {
  const client = await clPromise;
  const db = client.db("test");
  const col = db.collection("users");
  const existingUser = await col.findOne({ email });
  const day = new Date().getDate();
  if (existingUser?.streak) {
    //add streak
    const condition = (day - existingUser.streak.day) === 1 || (existingUser.streak.day - day) === (30 || 29 || 28 || 27 )/*check new months */ 
    if (condition) {
      const update = {
        $inc: {
          "streak.count": 1,
        },
        $set: {
          "streak.day": day,
        },
      };
      col.updateOne({ email }, update);
    }else if(day - existingUser.streak.day === 0){
       
    }else{
      const update = {
        $set: {
          "streak.count": 0,
          "streak.day": day,
        },
      };
      col.updateOne({ email }, update); 
    }

  } else {
    const update = {
      $set: {
        "streak.count": 0,
        "streak.day": day,
      },
    };
    col.updateOne({ email }, update);
  }
}
export async function GetUserStats(email:string){
  const client = await clPromise;
  const db = client.db("test");
  const col = db.collection("users");
  const userStats = await col.findOne({ email });
  if(userStats){
    return userStats
  }else{
    return {error:"user not found", status:"404"}
  }
}