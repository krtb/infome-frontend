import getAllBills from '../apis/infomeAPI'
import { FETCH_BILLS, SEARCH } from './types'


export const fetchBills = () => async dispatch => {
    const response = await getAllBills.get('/fetchbills');
    const listOfBills = await response.data.results[0].bills
    
    dispatch({ type: FETCH_BILLS, payload: listOfBills})
};

export const searchTerm = searchTerm => dispatch => {
    searchTerm.preventDefault()
    dispatch({
        type: SEARCH,
        payload: searchTerm.target.value
    });
};

// const response = await jsonPlaceholder.get('/posts');


// export const createNewBillRequest = () => async dispatch => {
//     //TODO: add fetch of api

//     let prod_api = 'https://infome-backend.herokuapp.com/api/v1/user_bills'
//     const fetchObj = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'Application/json',
//             'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify({
//             bill_id: bill_id
//         })
//     }
//     return fetch(prod_api, fetchObj).then(resp => resp.json()) // ---> removed hard coded path
// }
