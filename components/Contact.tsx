"use client"
import Image from "next/image";
import { useState } from "react";
import Spinner, { Check, X } from "./spinner";
import { Dancing_Script } from "next/font/google";
interface message{
    name:string,
    email:string,
    tel?:string,
    msg:string,
    [key:string]:any
}
const font = Dancing_Script({weight:['500'], style:['normal'], subsets:['vietnamese']})
export default function Contact(){
    const [formState, setFormState] = useState<message>({name:'', email:'', tel:'', msg:''});
    const [successState, setSuccessState] = useState(false)
    const [failState, setFailState]=useState(false)
    const [load, setLoad] = useState(false)
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
      if(formState.name.length <= 2 || formState.msg.length <= 2){
        return;
      }
        try {
            let jsonData = JSON.stringify(data);
            setLoad(true)
            const res = await fetch('/api/contact',{
                method:"POST",
                body:jsonData
              })
              setLoad(false)
              if(res.ok){
                setSuccessState(true);
                setTimeout(()=>{
                    setSuccessState(false)
                }, 3500)
              } else{
                setFailState(true);
                setTimeout(()=>{
                    setFailState(false)
                }, 3500)
              }
        } catch (e:any) {
           console.log(e.message)  
        }
     }
     function Success(){
        return (
            <>
              <div className="flex gap-2 rounded-xl w-4/6 bg-green-500">
                <Check className="size-6 text-lime-700" />
                <p className={font.className}>Message Sent</p>
              </div>
            </>
        )
     }
     function Error(){
        return (
            <>
              <div className="flex gap-2 rounded-xl w-4/6 bg-red-500">
                <X className="size-6 text-red-700" />
                <p className={font.className}>Message failed to Send</p>
              </div>
            </>
        )
     }
    return (
        <>
          <div className="flex items-center gap-3 flex-col-reverse lg:flex-row bg-gray-300 bg-opacity-50 min-h-screen justify-evenly md:p-12 p-20 lg:p-10">
              <div>
                <Image src={`/sunset.jpg`} alt="Image of Bible study" priority height={500} width={500} className="h-full w-full" />
              </div>
              <div className="flex flex-col justify-around">
                {successState && <Success />}
                {failState && <Error />}
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
                  <button type="submit" className="bg-teal-100 rounded hover:bg-teal-400 hover:scale-110 transition duration-500 ease-in-out w-1/2" >{load && <Spinner className="size-6" />} Send</button>
                </form>
              </div>
          </div>
        </>
    )
}