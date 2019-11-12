import getAllBills from '../apis/infomeAPI'
import { FETCH_BILLS } from './types'
import { SEARCH } from '../search/types';

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
