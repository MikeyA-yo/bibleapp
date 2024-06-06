import { clPromise } from "../mongodb";

export async function addFav(verse:string, email:string, version:string){
    const client= await clPromise;
    const db = client.db("test");
    const col = db.collection("users");
    const user = await col.findOne({email})
    let components = verse.split(" ");
    let url = "";
    if(!isNaN(parseInt(components[0]))){
        components[0] = components[0] == "1" ? "1st" : components[0] == "2" ? "2nd" : components[0] == "3" ? "3rd" : ""; 
        let chapterSide = components.slice(0, (components.indexOf(":")));
        let verseSide = components.slice(components.indexOf(":"));
        url =  "/" + chapterSide.slice(0,-1).join(" ") + "/" + chapterSide.slice(-1)
    }else{
        let chapterSide = components.slice(0, (components.indexOf(":")));
        let verseSide = components.slice(components.indexOf(":"));
        url =  "/" + chapterSide.slice(0, -1).join("") + "/" + chapterSide.slice(-1)
    }
    type versesArr = {
        verse:string,
        url:string,
        version:string
    }
    let verses:versesArr[] = [];
    if(user?.favoritesVerse){
        verses = [...user.favoritesVerse.verses, {verse, url, version}]
    }else{
        verses = [ {verse, url, version}] 
    }
    const update = {
        $set:{
            "favoritesVerse.verses": verses
        }
    }
    col.updateOne({email}, update )
}
export async function getFav(email:string){
    const client= await clPromise;
    const db = client.db("test");
    const col = db.collection("users");
    const user = await col.findOne({email});
    if(user?.favoritesVerse){
        return user.favoritesVerse.verses;
    } else{
        return []
    }   
}