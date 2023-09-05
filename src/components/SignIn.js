import React, { useContext, useEffect, useState } from 'react'
import {auth, provider} from "../fireBaseConfig";
import { FcGoogle } from "react-icons/fc"
import { UserContext } from '../contexts/UserContext';
const SignIn = () => {
const {user, handleLogIn, handleLogOut,} = useContext(UserContext)
// const [value, setValue] = useState("")
// const handleClick = () => {
//     signInWithPopup(auth, provider).then((data) => {
//         setValue(data.user.email)
//         localStorage.setItem("email", data.user.email)
//         console.log(data.user)
//     })
// }
// const logout = () => {
//     auth.signOut()
//     localStorage.clear()
//     window.location.reload()
// }
// useEffect(() => {
// setValue(localStorage.getItem("email"))
// }, [])
  return (
    < >
    {user ? <div className='flex flex-row gap-3'>
    <img  src={user.photoURL} className='rounded-full w-10'/>
        <button className='text-sm text-slate-500' onClick={handleLogOut}>  Logout</button>
    </div> 
    
     :  <button className=' flex-shrink mx-auto  text-white duration-300 hover:text-black bg-black px-2 py-3 rounded-md flex justify-center items-center text-center hover:bg-white border-[1px] hover:border-slate-300 border-transparent text-sm' onClick={handleLogIn}>

     <FcGoogle className='mr-2' />
        Sign in With Google
    </button>}
    
   
    </>
  )
}

export default SignIn;