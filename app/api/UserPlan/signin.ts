import { clPromise } from "../mongodb";
import bcrypt from "bcrypt";
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
export async function AddDailyPlan({numberPerDay, numberPerWeek}:{numberPerDay?:number, numberPerWeek?:number }){
  
}