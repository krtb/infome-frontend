import getAllBills from '../apis/infomeAPI'
import { FETCH_BILLS, SEARCH, FIND_BILL } from './types'

// (used in): SearchBills
export const fetchBills = () => async dispatch => {
    const response = await getAllBills.get('/fetchbills');
    const listOfBills = await response.data.results[0].bills
    
    dispatch({ type: FETCH_BILLS, payload: listOfBills})
};

// (used in): SearchBar
export const searchTerm = searchTerm => dispatch => {

    console.log(searchTerm.target.value, ' seachTerm action creator ');
    
    searchTerm.preventDefault()

    dispatch({
        type: SEARCH,
        payload: searchTerm.target.value
    });
};

// (used in): SearchBar
export const filterText = (searchTerm, props) => async dispatch => {

    let filteredText = props.upcoming_bill_data.filter((aBill) => (

        aBill.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        aBill.bill_number.toLowerCase().includes(searchTerm.toLowerCase())

      )
    )    

    let foundBill = await filteredText

    dispatch({ type: FIND_BILL, payload: foundBill })

}
