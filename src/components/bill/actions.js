import getAllBills from '../apis/infomeAPI'
import { FETCH_BILLS, SEARCH } from './types'


export const fetchBills = () => async dispatch => {
    const response = await getAllBills.get('/fetchbills');
    dispatch({ type: FETCH_BILLS, payload: response.data.results[0].bills})
};

export const searchTerm = searchTerm => dispatch => {
    searchTerm.preventDefault()
    dispatch({
        type: SEARCH,
        payload: searchTerm.target.value
    });
};

export const createNewBillRequest = () => async dispatch => {
    
}
