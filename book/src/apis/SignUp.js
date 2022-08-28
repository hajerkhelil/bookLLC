
import axios from 'axios'


const signup = async (playload) => {
  return axios.post(
    process.env.REACT_APP_BASE_URL + "/signup",{...playload});
};

export { signup};