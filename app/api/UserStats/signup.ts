import { clPromise } from "../mongodb";
import bcrypt from "bcrypt";
// import { verifyUser } from "./verifyEmail";
//function currently not in use
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
     //here it is same day, so no need to do anything  
    }else{
      const update = {
        $set: {
          "streak.count": 0,
          "streak.day": day,
        },
      };
      col.updateOne({ email }, update); 
    }
    // do best streak maths
    const currentStreak = existingUser.streak.count;
    if(!existingUser.streak.best){
      const update = {
        $set:{
          "streak.best": currentStreak
        }
      }
      col.updateOne({ email }, update); 
    }
    if(existingUser.streak.best){
      if(currentStreak > existingUser.streak.best){
        const update = {
          $set:{
            "streak.best": currentStreak
          }
        }
        col.updateOne({ email }, update); 
      }
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
   //add levels, n rank, dedication e.t.c...
   const ranks = ["Faithful Servant","Dedicated","Generous Giver","Compassionate Healer","Saint","Wise Counselor","Joyful Witness", "Disciple", "Humble Disciple","Prophet", "Peacemaker","Devoted Follower","Minister", "Loving Shepherd","Soul winner", "Prayer Warrior","Grounded in The word"]
   if(existingUser?.rank){
      const level = Math.round(((existingUser.streak.count * existingUser.streak.best) - 10) + existingUser.readingPlan.numberPerType) + (existingUser.favoritesVerse.verses.length ?? 1)
      let rank = ranks[Math.round(Math.sqrt(level/(24 + (existingUser.streak.best - existingUser.readingPlan.numberPerType))))];
      if(Math.round(Math.sqrt(level/(24 + (existingUser.streak.best - existingUser.readingPlan.numberPerType)))) > ranks.length){
         rank = "Final Level, God Blesses You";
        }
      const update = {
        $set: {
          "rank.level": level,
          "rank.name":rank ?? "Starter",
        },
      };
      col.updateOne({ email }, update);  
   }else{
    const update = {
      $set: {
        "rank.level": 0,
        "rank.name":"Starter",
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