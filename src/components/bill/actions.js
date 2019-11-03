import getAllBills from '../apis/infomeAPI'
import FETCH_BILLS from './types'

export const fetchPosts = () => async dispatch => {

    const response = await getAllBills.get('/fetchbills');

    dispatch({ type: FETCH_BILLS, payload: response })
};