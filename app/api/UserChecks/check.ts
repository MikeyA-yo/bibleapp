import { sendReminder } from "../contact/contact";
import { clPromise } from "../mongodb";
let emails: string[] = [];
let names: string[] = [];
export async function checker() {
  const client = await clPromise;
  const db = client.db("test");
  const col = db.collection("users");
  const users = col.find({ "task.state": false });
  if(new Date().getHours() < 12){
    return {};
  }
  const usersArray = await users.toArray();
  usersArray.forEach((user) => {
    emails.push(user.email);
    names.push(user.name);
  });
  let i = 0;
  let int = setInterval(() => {
    if (i == emails.length) {
      clearInterval(int);
    }
    sendReminder(emails[i], "Reminder", names[i]);
    i++;
  }, 1000);
  const day = new Date().getDate()
  const update = {
    $set:{
      "task.lastRemindDate":day
    }
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
      "task.lastUpdate":day,
    },
  };

  return col.updateOne({ email }, update);
}
