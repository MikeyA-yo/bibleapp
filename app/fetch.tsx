//links
//https://www.abibliadigital.com.br/api/books
//https://bolls.life/get-text/NKJV/19/119/ 
//this returns list of verses with moses
//https://bolls.life/find/NKJV/?search=moses&match_case=false&match_whole=true
import { books, newBooksIndex} from "@/components/books";
const authString =  "Bearer " + process.env.APIBIBLEKEY;
async function getNKJV(chap:string, ver:string){
   for ( const key in newBooksIndex){
     if (key.includes(chap.toLowerCase())){
        return newBooksIndex[key]
     }
   }
}
async function getBibles(version:string, chap:string, ver:string){

}