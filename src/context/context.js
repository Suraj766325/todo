import { createContext, useContext } from "react";

const todoContext=createContext({
    todos:[{
        id:1,
        todo:"this is first message",
        completed:false
    }],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})
export const useTodo=()=>useContext(todoContext)
export const  TodoProvide=todoContext.Provider