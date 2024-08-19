import axios from "axios";


export const fetchAllproducts = async () => {
    const response = await axios.get("http://localhost:8080/api/v1/products");
    return response.data
}




