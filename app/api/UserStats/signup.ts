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
export async function UserStats(email:string){
  
}