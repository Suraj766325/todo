import api from "./api";


const addTodo=async(data)=>{
    try{
        await api.post('/todo',data)
    }
    catch(error){
        console.log(error)
    }
}

const listTodo=async(data)=>{
    try{
        const response=await api.get('/todo')
        return response.data
    }
    catch(error){
        throw error.response?.data || error.message
    }
}

const updateTodo=async(obj)=>{
    try{
        const response=await api.patch(`/todo/${obj.id}`,obj.data)
        return response
    }
    catch(error){
        throw error.response?.data || error.message
    }
}

const deleteTodo=async(obj)=>{
    try{
        const response=await api.delete(`/todo/${obj.id}`)
        return response
    }
    catch(error){
        throw error.response?.data || error.message
    }
}

const toggleTodo=async(obj)=>{
    try{
        const response=await api.patch(`/todo/${obj.id}/toggle`)
        return response
    }
    catch(error){
        console.log(error)
        throw error.response?.data || error.message
    }
}

export{
    addTodo,
    listTodo,
    updateTodo,
    deleteTodo,
    toggleTodo
}