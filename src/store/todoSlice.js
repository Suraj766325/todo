import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:{
        todos:[]
    },
    reducers:{
        setTodo:(state,action)=>{state.todos=action.payload}
    }
})


export default todoSlice.reducer
export const{setTodo}=todoSlice.actions