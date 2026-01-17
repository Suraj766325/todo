import { configureStore } from "@reduxjs/toolkit";
import user from './userSlice.js'
import todo from './todoSlice.js'

const store=configureStore({
    reducer:{
        user,
        todo
    }
})

export default store