import React, { useState } from 'react'
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase.js"
function SIgnUp() {
    const[email, setEmail] =useState('');
    const[password, setPassword] =useState('');

    const handleSUbmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password).then((userCredentials)=>{console.log(userCredentials)}).catch((error)=>{console.log(error)});
    }
    
  return (
    <div>
      <form className='flex gap-3 flex-col max-w-sm m-20 text-red-300' onSubmit={handleSUbmit} >
        <input className='border-2 border-red-800' type='email' placeholder='type email' value={email} onChange={(e)=> setEmail(e.target.value)} ></input>
        <input className='border-2 border-red-800' type='password' placeholder='type pass' value={password} onChange={(e)=> setPassword(e.target.value)} ></input>
        <button >sign up</button>
      </form>
    </div>
  )
}

export default SIgnUp
