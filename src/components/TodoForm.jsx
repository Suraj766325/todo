import React, { useState } from 'react'
import {addTodo,listTodo} from '../service/todo.service.js';
import { useDispatch } from 'react-redux';
import { setTodo } from '../store/todoSlice.js';

function TodoForm() {
    const [loading,setLoading]=useState(false)
    const dispatch=useDispatch()
    const [content,setContent]=useState("")
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const data={content}
        try{
            await addTodo(data)
            const result=await listTodo()
            dispatch(setTodo(result.data))
            setContent("")
        }
        catch(error){
            alert('something went wrong')
        }
    }
  return (
        <div className='flex justify-center items-center  pt-6 pb-4 '>
            <form className='flex w-3/4 bg-[#172842] shadow-lg shadow-white/10 rounded-lg' onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Write Todo...' 
                    className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 text-white'
                    value={content}
                    onChange={(e)=>{setContent(e.target.value)}}
                    required
                />
                <button type='submit' className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0' disabled={loading}>{loading?'Adding':'Add'}</button>
            </form>
        </div>
  )
}

export default TodoForm