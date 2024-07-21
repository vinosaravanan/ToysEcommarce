import axios from 'axios';


export const CreateUser = async (userdata) => {
    const response = await axios.post('http://localhost:8080/api/v1/register', userdata)
    console.log(response);
    return response.data
}


export const LoginUser = async (userdata) => {
   const response = await axios.post('http://localhost:8080/api/v1/login', userdata)
   return response.data
}



// export default {
//     CreateUser
// }