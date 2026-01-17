import api from "./api"


const userLogin=async(data)=>{
    try {
    const response = await api.post(`/user/loginUser`, data)
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

const userRegister=async(data)=>{
    try{
        const response=await api.post('/user/registerUser',data)
        return response.data
    } catch(error){
        throw error.response?.data || error.message
    }
}

const userLogout=async(data)=>{
    try{
        await api.get('/user/logoutUser')
    } catch(error){
        console.log(err)
    }
}

const directLogin=async(data)=>{
    try{
        const result=await api.get('/user')
        return result.data;
    }
    catch(error){
        throw error
    }
}

export{
    userLogin,
    userRegister,
    userLogout,
    directLogin
}