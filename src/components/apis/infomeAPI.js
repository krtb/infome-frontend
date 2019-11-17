import axios from 'axios'; 


const infomeInstance = axios.create({
    baseURL: 'https://infome-backend.herokuapp.com/api/v1'
});

infomeInstance.defaults.headers.common['Content-Type'] = 'Application/json'
infomeInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;

export default infomeInstance