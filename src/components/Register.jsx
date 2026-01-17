import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userRegister } from '../service/user.service'
import { login } from '../store/userSlice'

function Register() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [fullName,setFullName]=useState("")
    const [file,setFile]=useState(null)

    const submitHandler=async(e)=>{
        e.preventDefault();
        const fd=new FormData()
        fd.append("email",email)
        fd.append("password",password)
        fd.append("name",fullName)
        fd.append("avatar",file)
        try{
            const result=await userRegister(fd)
            navigate('/login')
        }catch(error){
            alert("something went wrong")
        }
    }
  return (
    <div className='w-full h-[calc(100vh-64px)] flex justify-center items-center '>
       <div className='bg-white shadow-2xl rounded-md p-2 flex flex-col gap-3 w-1/2 md:w-1/3 lg:w-1/4'>
            <p className='text-center font-bold text-2xl'>Register Form</p>
            <div className='flex w-auto border rounded-md '>
                <div className='w-[50%] text-center   py-1' onClick={()=>{navigate('/login')}}>Login</div>
                <div className='w-[50%] text-center py-1 bg-[#1e3352] text-white' >Signup</div>
            </div>
            <form action="" className='flex flex-col gap-3 w-auto' onSubmit={submitHandler}>
                <input type="email" placeholder='Email Address' className='w-full outline-none px-2 py-1 border rounded-md' value={email} onChange={(ele)=>{setEmail(ele.target.value)}} required/>
                <input type="password" placeholder='Password' className='w-full outline-none px-2 py-1 border rounded-md' value={password} onChange={(ele)=>{setPassword(ele.target.value)}} required/>
                <input type="text" placeholder='Full Name' className='w-full outline-none px-2 py-1 border rounded-md' value={fullName} onChange={(ele)=>{setFullName(ele.target.value)}} required/>
                <input type="file" name="" id="" className='text-red-500' required onChange={(e)=>{setFile(e.target.files[0])}}/>
                <button type="submit" className='bg-[#1e3352] text-white text-center rounded-md py-1'>Signup</button>
            </form>
            
            <p className='text-center'>Already registered? <span className='text-[#1e3352]' onClick={()=>{navigate('/login')}}>Login now</span></p>
       </div>

    </div>
  )
}

export default Register