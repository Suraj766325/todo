import React, { useState } from 'react'
import { deleteTodo, listTodo, toggleTodo, updateTodo } from '../service/todo.service.js'
import { useDispatch } from 'react-redux'
import { setTodo } from '../store/todoSlice.js'

function TodoItem({ele}) {
    const dispatch=useDispatch()
    const [content,setContent]=useState(ele.content)
    const [completed,setCompleted]=useState(ele.completed)
    const [editable,setEditable]=useState(false)

    const handleCompleted=async(ele)=>{
        setCompleted(!completed)
        const obj={
            id:ele._id
        }
        try{
            await toggleTodo(obj)
            const result=await listTodo()
            dispatch(setTodo(result.data))
       }
       catch(error)
       {
            console.log(error)
            console.log('something went wrong')
            alert('something went wrong')
       }
    }

    const handleUpdateTodo=async(ele)=>{
        setEditable(false)
        const obj={
            id:ele._id,
            data:{content}
        }
       try{
            await updateTodo(obj)
            const result=await listTodo()
            console.log(result.data)
            dispatch(setTodo(result.data))
       }
       catch(error){
            console.log('something went wrong')
            alert('something went wrong')
       }
    }
    
    const handleDelete=async(ele)=>{
        const obj={
            id:ele._id
        }
        try{
            await deleteTodo(obj)
            const result=await listTodo()
            console.log(result.data)
            dispatch(setTodo(result.data))
       }
       catch(error){
            console.log('something went wrong')
            alert('something went wrong')
       }
    }

  return (
    <div key={ele._id} className={`w-3/4 flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>
        <input type="checkbox" checked={completed} onChange={()=>{handleCompleted(ele)}} />
        <input type="text" className={`border outline-none w-full bg-transparent rounded-lg ${editable?"border-black/10 px-2" : "border-transparent"} ${completed?"line-through":""} `} value={content} onChange={(e)=>{setContent(e.target.value)}} readOnly={!editable}/>
        <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
            onClick={(e)=>{
                if(completed) return
                if(editable) handleUpdateTodo(ele)
                else         setEditable(true)
            }}  
        >
            {editable?"📁" : "✏️"}
        </button>
        <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={()=>{handleDelete(ele)}}
        >
            ❌
        </button>
    </div>
  )
}

export default TodoItem