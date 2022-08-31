

import { REGISTER, FAIL, LOGIN, LOGOUT, GET_CURRENT, CLEARERRORS, GET_USERS } from './../types/authtypes';
import axios from "axios"


export const register= (newuser, Navigate) => async (dispatch) =>{

    try {
        const res= await axios.post('http://localhost:3000/api/authe/signup', newuser)
        dispatch({type:REGISTER, payload: res.data})
        Navigate('/profile')

    } catch (error) {
        dispatch({type:FAIL, payload: error.response.data})
    }
}

export const login = (user, Navigate) => async (dispatch) =>{

    try {
        
        const res= await axios.post('http://localhost:3000/api/authe/logIn', user)
        dispatch({type: LOGIN, payload: res.data})
        console.log(res.data)

        if(res.data.user.role==="user")
        { return Navigate('/profile')}
        
    } catch (error) {
      
     dispatch({type: FAIL, payload: error.response.data}) 
    }
}

export const logout=()=>{
    return {type:LOGOUT}
}


// profile
export const getcurrent= ()=> async (dispatch) => {

    const token=localStorage.getItem("token")
    const config={
        headers: {
         authorization: token,
        }
    }
    try {
        const res= await axios.get('http://localhost:3000/api/authe/current', config)
        dispatch({type: GET_CURRENT, payload: res.data})
    } catch (error) {
        console.log(error);
    }

}


export const clearerrors = () => {
    return {type: CLEARERRORS}
}


// for the admin page 
export const getusers= ()=> async (dispatch) => {

    const token=localStorage.getItem("token")
    const config={
        headers: {
         authorization: token,
        }
    }
    try {
        console.log("hi")
        const res= await axios.get('http://localhost:3000/api/authe/allusers', config)
        dispatch({type: GET_USERS, payload: res.data})
        console.log(res.data)
    } catch (error) {
        console.log(error);
    }

}