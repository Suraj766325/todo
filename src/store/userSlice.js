import { createSlice } from "@reduxjs/toolkit";



const userSlice=createSlice({
    name:"user",
    initialState:{
        status:false,
        user:null
        
    },
    reducers:{
        login:(state,action)=>{state.status=true,state.user=action.payload},
        logout:(state)=>{state.status=false,state.user=null}
    }
})

export default userSlice.reducer
export const {login,logout}=userSlice.actions