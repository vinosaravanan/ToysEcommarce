import axios from "axios";


export const fetchAllproducts = async () => {
    const response = await axios.get("http://localhost:8080/api/v1/products");
    return response.data
}


export const  FetchCategory = async (filtervalue) => {
        
    const response = await axios.get(`http://localhost:8080/api/v1/filterproducts?category=${filtervalue}`)
    
    return response.data
}


export const FetchBrand = async (filtervalue) => {
     const response = await axios.get(`http://localhost:8080/api/v1/filterproducts?brand=${filtervalue}`)
     console.log(response);
     
     return response.data
}

export const FetchRating = async (filtervalue) => {
     const response = await axios.get(`http://localhost:8080/api/v1/filterproducts?ratings=${filtervalue}`)
     console.log(response);
     
     return response.data
}

export const FetchPrice = async (PriceValue) => {
           const [minValue, maxValue] = PriceValue
     
         console.log(minValue, maxValue, 'from FetchPrice');
         
     const response = await axios.get(`http://localhost:8080/api/v1/filterproducts?minprice=${minValue}&maxprice${maxValue}`)
   
     
     return response.data
}

export const paginationFetch = async (page, limit) => {
    
    const response = await axios.get(`http://localhost:8080/api/v1/pagination?page=${page}&limit=${limit}`)
    return response.data

}

