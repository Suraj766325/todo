import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../store/userSlice'
import { userLogin } from '../service/user.service.js'
import { listTodo } from '../service/todo.service.js'
import { setTodo } from '../store/todoSlice.js'

function Login() {
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()
    const submitHandler=async(e)=>{
        e.preventDefault();
        const data={
            email,
            password
        }
        try{
            const result=await userLogin(data)
            dispatch(login(result.data))
            const response=await listTodo()
            dispatch(setTodo(response.data))
            navigate('/')
        }
        catch(err){
            console.log(err)
            alert('invalid credentials')
        }

    }
  return (
    <div className='w-full h-[calc(100vh-64px)] flex justify-center items-center '>
       <div className='bg-white shadow-2xl rounded-md p-2 flex flex-col gap-3 w-1/2 md:w-1/3 lg:w-1/4'>
            <p className='text-center font-bold text-2xl'>Login Form</p>
            <div className='flex w-auto border rounded-md '>
                <div className='w-[50%] text-center  bg-[#1e3352] text-white py-1'>Login</div>
                <div className='w-[50%] text-center py-1' onClick={()=>{navigate('/register')}}>Signup</div>
            </div>
            <form action="" className='flex flex-col gap-3 w-auto' onSubmit={submitHandler}>
                <input type="email" placeholder='Email Address' className='w-full outline-none px-2 py-1 border rounded-md' value={email} onChange={(ele)=>{setEmail(ele.target.value)}} required/>
                <input type="password" placeholder='Password' className='w-full outline-none px-2 py-1 border rounded-md' value={password} onChange={(ele)=>{setPassword(ele.target.value)}} required/>
                <button type="submit" className='bg-[#1e3352] text-white text-center rounded-md py-1'>Login</button>
            </form>
            
            <p className='text-center'>Not a member? <span className='text-[#1e3352]' onClick={()=>{navigate('/register')}}>Singup now</span></p>
       </div>

    </div>
  )
}

export default Login