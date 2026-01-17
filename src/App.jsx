import React, { useEffect } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import TodoForm from './components/TodoForm'
import TodoItemDisplay from './components/TodoItemDisplay'
import { directLogin } from './service/user.service'
import { login } from './store/userSlice'
import { setTodo } from './store/todoSlice'
import { listTodo } from './service/todo.service'

function App() {
  const {user,status}=useSelector((state)=>state.user)
  const {todos}=useSelector((state)=>state.todo)
  const dispatch=useDispatch()
  useEffect(()=>{
    ;(async()=>{
      const result=await directLogin()
      dispatch(login(result.data))
      const response=await listTodo()
      dispatch(setTodo(response.data))
    }
    )()
  },[])
  return (
    <>
      <div className='bg-[#172842] min-h-screen'>
        <Header/> 
        <Outlet/>
        {status && <TodoForm/>}
        {status && <TodoItemDisplay/>}
      </div>
    </>
  )
}

export default App