import { useEffect, useState } from "react"
import { useTodo, TodoProvide } from "./context/context"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"

function App() {
  const [todos, setTodos] = useState(() => {
  const stored = localStorage.getItem("todos");
  return stored ? JSON.parse(stored) : [];
});

  const addTodo=(todo)=>{
    setTodos((prevTodo)=>[todo, ...prevTodo])
  }
  const updateTodo=(id,todo)=>{
    setTodos((prevTodo)=>prevTodo.map((ele)=>ele.id===id?todo:ele))
  }
  const deleteTodo=(id)=>{
    setTodos((prevTodo)=>prevTodo.filter((ele)=>ele.id!=id))
  }
  const toggleComplete=(id)=>{
    setTodos((prevTodo)=>prevTodo.map((ele)=>ele.id===id?{...ele,completed:!ele.completed}:ele))
  }
  // useEffect(()=>{
  //   const todos=JSON.parse(localStorage.getItem("todos"))
  //   if(todos) setTodos(todos)
  // },[])
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])
  return (
    <TodoProvide value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className="w-full">
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvide>
  )
}

export default App
