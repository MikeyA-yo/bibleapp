import { sendReminder } from "../contact/contact";
import { clPromise } from "../mongodb";
let emails: string[] = [];
let names: string[] = [];
export async function checker() {
    let currentDay = new Date().getDate();
  const client = await clPromise;
  const db = client.db("test");
  const col = db.collection("users");
  const users = col.find({ "task.state": false });
  if (new Date().getHours() < 12) {
    return {};
  }
  const usersArray = await users.toArray();
  usersArray.forEach((user) => {
        if(currentDay != user.task.lastUpdateDate){
            const update = {
                $set:{
                    "task.state":false
                }
            }
            col.updateOne({email: user.email}, update)
        }
    if(user.task.lastRemindDate){
        
    }
    emails.push(user.email);
    names.push(user.name);
  });
//   if (emails.length == (0 || 1)) {
//     return;
//   }
  let i = 0;
  let int = setInterval(async () => {
    if (i == emails.length) {
      clearInterval(int);
    }
    const user = await col.findOne({email: emails[i]})
    if(user?.task?.lastRemindDate){
        if(currentDay == user.task.lastRemindDate){
            clearInterval(int);
        }
    }
    if(emails.length !== 0){
        sendReminder(emails[i], "Reminder", names[i]);
    }
    i++;
  }, 1000);
  const day = new Date().getDate();
  const update = {
    $set: {
      "task.lastRemindDate": day,
    },
  };
  if(emails.length !== 0){
    emails.forEach(async (email) =>{
        await col.updateOne({ email }, update)
    })
  }
  return users;
}

export async function addTask(task: string, done: boolean, email: string) {
  const client = await clPromise;
  const db = client.db("test");
  const col = db.collection("users");
  const day = new Date().getDate();
  const update = {
    $set: {
      "task.state": done,
      "task.name": task,
      "task.lastUpdate": day,
    },
  };

  return col.updateOne({ email }, update);
}
