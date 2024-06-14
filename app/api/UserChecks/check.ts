import { sendReminder } from "../contact/contact";
import { clPromise } from "../mongodb";

export async function checker() {
  let currentDay = new Date().getDate();
  const client = await clPromise;
  const db = client.db("test");
  const col = db.collection("users");
  const otherUsers = col.find({ "task.state": true });
  const otherArray = await otherUsers.toArray();
    let emails: string[] = [];
    let names: string[] = [];
  otherArray.forEach(async (person) =>{
    if(person.task.lastUpdate != currentDay){
      const update={
        $set:{
          "task.state":false,
          "task.lastUpdate": currentDay
        }
      }
      await col.updateOne({email: person.email}, update)
    }
  })

  const users = db.collection("users").find({ "task.state": false });
  
  const usersArray = await users.toArray();

  usersArray.forEach((user) => {
    if(user.task.lastRemindDate){
      if(user.task.lastRemindDate !== currentDay){
        emails.push(user.email);
        names.push(user.name);
      }
    }else{
      emails.push(user.email);
      names.push(user.name);
    }
  });
  if (new Date().getHours() < 12) {
    return {};
  }
  if (emails.length === 0 ) {
    return {};
  }
  const day = new Date().getDate();
  const update = {
    $set: {
      "task.lastRemindDate": day,
    },
  };
  if(emails.length !== 0){
   let sentEmails =  await sendReminder(emails, "Reminder", names)
  //  let emailsSent = sentEmails.emails
   console.log(sentEmails)
    emails.forEach((email:string) =>{
       col.updateOne({ email }, update);
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
