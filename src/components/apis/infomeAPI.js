import axios from 'axios'; 
require("dotenv").config();


const infomeInstance = axios.create({
    baseURL: `process.env.REACT_APP_BACKEND_HEROKU_URL`
});

infomeInstance.defaults.headers.common['Content-Type'] = 'Application/json'
infomeInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;

export default infomeInstance