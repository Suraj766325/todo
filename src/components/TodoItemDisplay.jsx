import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
function TodoItemDisplay() {
    const {todos}=useSelector((state)=>state.todo)
  return (
    <div className="flex flex-col gap-3">
  {todos.map((ele) => (
    <div key={ele._id} className="flex justify-center w-full">
      <TodoItem ele={ele} />
    </div>
  ))}
</div>

  )
}

export default TodoItemDisplay