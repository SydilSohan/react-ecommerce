import React, { useContext} from 'react'
import { FcGoogle } from "react-icons/fc"
import { UserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom';
const SignIn = () => {
const {user, handleLogIn, handleLogOut,} = useContext(UserContext)
  return (
    < >
    {user ? <div className='flex flex-col sm:flex-row justify-start  gap-3'>
    <Link className='flex flex-row items-center gap-4 text-sm' to={"/orders"}>
         <img  src={user.photoURL} className='rounded-full w-10'/>
         <span> View Orders</span>
    </Link>
 
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