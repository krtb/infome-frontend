import axios from 'axios'; 

let prodAPI = `${process.env.REACT_APP_BACKEND_PROD_API}`
let devAPI = `${process.env.REACT_APP_BACKEND_DEV_API}`

const infomeInstance = axios.create({    
    baseURL: devAPI
});

infomeInstance.defaults.headers.common['Content-Type'] = 'Application/json'
infomeInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;

export default infomeInstance