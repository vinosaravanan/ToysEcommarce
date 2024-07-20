import axios from 'axios';


export const CreateUser = (userdata) => {
    return axios.post('http://localhost:8080/api/v1/register', userdata)
}


// export default {
//     CreateUser
// }