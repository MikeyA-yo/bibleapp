import { sendReminder } from "../contact/contact";
import { clPromise } from "../mongodb";
let emails:string[];
export async function checker(){
    const client = await clPromise;
    const db = client.db("test");
    const col = db.collection("users");
    const users = col.find({ "task.state": false });
    const usersArray = await users.toArray();
    usersArray.forEach(user =>{
        emails.push(user.email);
    })
    let i = 0;
    while(i < emails.length){
        setInterval(()=>{
            sendReminder(emails[i], "Reminder");
            i++;
        }, 1000)
    }
}

export async function addTask(task:string, done:boolean, email:string){
    const client = await clPromise;
    const db = client.db("test");
    const col = db.collection("users");
    const update = {
        $set:{
            "task.state":done,
            "task.name":task
        }
    }
    col.updateOne({email}, update)
}