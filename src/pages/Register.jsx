import React from 'react'
import Navbar from '../components/Navbar'
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaRegAddressCard } from "react-icons/fa6";
function Register() {
  return (
    <div className='h-[100vh] bg-slate-950'>
      <Navbar/>
      <div>
                    <div style={{boxShadow:"0 0 10px white"}} className=' card w-[500px] mt-[100px] m-auto bg-slate-800 border-2 border-white'>
                         <div className=' card-header'>
                 <h1 className='text-center text-3xl mt-2 font-bold underline text-white'>User-Registeration</h1>
                         </div>
                         <div className=' card-body'>
                          <form action="/login">
                          <div className=' flex gap-3'><CgProfile className='text-white  text-[40px] mt-2'/><input type="text" placeholder='Enter Users Name' className=' form-control p-2 w-full rounded-md placeholder:text-center placeholder:font-bold placeholder:text-slate-600 mt-3' required/></div>  

                          <div className=' flex gap-3'><FaRegAddressCard className='text-white  text-[40px] mt-2'/><input type="text" placeholder='Enter Current Address' className=' form-control p-2 w-full rounded-md placeholder:text-center placeholder:font-bold placeholder:text-slate-600 mt-3' required/></div>  

                              <div className=' flex gap-3'><IoMdMail className='text-white  text-[40px] mt-2'/><input type="email" placeholder='Enter the Email-Id' className=' form-control p-2 w-full rounded-md placeholder:text-center placeholder:font-bold placeholder:text-slate-600 mt-3' required/></div>  
                               <div className='flex gap-3'><RiLockPasswordFill className='text-white  text-[40px]  mt-2'/><input type="password" placeholder='Enter the Password' className=' form-control mt-3 p-2 w-full rounded-md placeholder:text-center placeholder:font-bold placeholder:text-slate-600' required/></div> 
                                
                               <div className='flex gap-3 ms-4 mt-3'><input type="checkbox" name="checkout" id="" required/> <p className='text-white font-medium'>Click here for Confirmation</p></div> 
                              <div className='flex gap-2 mt-2'><p className='text-white font-semibold text-center'>Already have an Account? Click Here <a href="/login" className=' text-green-400 underline'>login</a></p></div>
       <button className='btn btn-success w-full mt-3 text-white text-xl'>Login</button>
                             
                          </form>
                         </div>
                    </div>
            </div>
    </div>
  )
}

export default Register
