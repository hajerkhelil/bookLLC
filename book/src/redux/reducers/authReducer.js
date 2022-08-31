

import { REGISTER, FAIL, LOGIN, LOGOUT, GET_CURRENT, CLEARERRORS, GET_USERS } from './../types/authtypes';

const initialState = {
    users:[],
    user:null,
    errors: null,
    auth: false
};

const authReducer= (state = initialState, { type, payload }) => {
  switch (type) {

    case REGISTER:
      case LOGIN:
      localStorage.setItem('token', payload.token)
      return {...state, user: payload.user, auth:true, errors:null};

    case FAIL:
      return {...state, errors:payload.errors, auth:false}

    case LOGOUT:
       localStorage.removeItem('token')
       return {...state, user:null, auth:false}

    case GET_CURRENT:
       return {...state, user:payload, auth:true}

    case CLEARERRORS:
      return {...state, errors: null}

      case GET_USERS:
        return {...state, users: payload.users}

    default:
      return state;
  }
};


export default authReducer