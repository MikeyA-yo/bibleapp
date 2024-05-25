"use client"
import Image from "next/image";
import { useState } from "react";
interface message{
    name:string,
    email:string,
    tel?:string,
    msg:string,
    [key:string]:any
}
export default function Contact(){
    const [formState, setFormState] = useState<message>({name:'', email:'', tel:'', msg:''})
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {{
        setFormState(prevState => ({
          ...prevState,
          name: e.target.value
        }));
      }};
      const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {{
        setFormState(prevState => ({
          ...prevState,
          email: e.target.value
        }));
      }};
      const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {{
        setFormState(prevState => ({
          ...prevState,
          tel: e.target.value
        }));
      }};
      const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {{
        setFormState(prevState => ({
          ...prevState,
          msg: e.target.value
        }));
      }};
     const handleSubmit = async (data:message)=>{
        try {
            let jsonData = JSON.stringify(data);
            const res = await fetch('/api/contact',{
                method:"POST",
                body:jsonData
              })
              if(res.ok){
                console.log(res)
                return true
              } 
        } catch (e:any) {
           console.log(e.message)  
        }
     }
    return (
        <>
          <div className="flex items-center gap-3 flex-col-reverse lg:flex-row bg-gray-300 bg-opacity-50 min-h-screen justify-evenly p-10">
              <div>
                <Image src={`/sunset.jpg`} alt="Image of Bible study" priority height={500} width={500} className="h-full w-full" />
              </div>
              <div className="flex flex-col justify-around">
                <h1 className="text-2xl">Contact For More Info:</h1>
                <form 
                onSubmit={(e)=>{
                    e.preventDefault();
                    handleSubmit(formState)
                    
                }}
                className="flex flex-col gap-4">
                  <label htmlFor="Name" className="text-white"  >Name:</label>
                  <input 
                  onChange={handleNameChange}
                  type="text" name="name" id="name" required placeholder="Name" className="required:hover:border-red-400 border  rounded placeholder:text-slate-600" />
                  <label htmlFor="Email" className="text-white" >Email:</label>
                  <input
                  onChange={handleEmailChange} 
                  type="text" name="email" id="email" required placeholder="Email" className="required:hover:border-red-400 border  rounded placeholder:text-slate-600" />
                  <label htmlFor="Number" className="text-white" >Number:</label>
                  <input 
                  onChange={handleNumberChange}
                  type="number" name="number" id="number"  placeholder="Number" className="required:hover:border-red-400 border  rounded placeholder:text-slate-600" />
                  <label htmlFor="msg" className="text-white">Message: </label>
                  <textarea 
                   onChange={handleMessageChange}
                  className="h-20 required:hover:border-red-400" required />
                  <button type="submit" className="bg-teal-100 rounded hover:bg-teal-400 hover:scale-110 transition duration-500 ease-in-out w-1/2" >Send</button>
                </form>
              </div>
          </div>
        </>
    )
}