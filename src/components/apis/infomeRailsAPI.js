import axios from 'axios'; 

export default axios.create({
    getAllBills: 'https://infome-backend.herokuapp.com/api/v1/fetchbills'
});