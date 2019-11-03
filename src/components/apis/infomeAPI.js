import axios from 'axios'; 

export default axios.create({
    infomeRailsHerokuAPI: 'https://infome-backend.herokuapp.com/api/v1'
});