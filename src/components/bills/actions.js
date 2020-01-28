import getAllBills from '../apis/infomeAPI'
import { 
    FETCH_BILLS, 
    SEARCH, 
    FIND_BILL, 
    CHOSE_PRODUCTIVE_BILL, 
    CHOSE_CONCERNING_BILL 
    } from './types'

// (used in): SearchBills
export const fetchBills = () => async dispatch => {
    const response = await getAllBills.get('/fetchbills');
    const listOfBills = await response.data.results[0].bills
    
    dispatch({ type: FETCH_BILLS, payload: listOfBills})
};

// (used in): SearchBar
export const searchTerm = searchTerm => dispatch => {
    
    searchTerm.preventDefault()

    dispatch({
        type: SEARCH,
        payload: searchTerm.target.value
    });
};

// (used in): SearchBar
export const filterText = (searchTerm, props) => async dispatch => {

    let filteredText = props.initialBillList.filter((aBill) => (

        aBill.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        aBill.bill_number.toLowerCase().includes(searchTerm.toLowerCase())

      )
    )    

    let foundBill = await filteredText

    dispatch({ type: FIND_BILL, payload: foundBill })

}

// TODO: (used in): SavedBillsTable && SearchBills
export const fetchPostBill = (bill) => {
    console.log('FETCH POST BILL FUNCTION');

    //TODO: add new Bill class attributes, after backend API migration
    let user_data = bill
    JSON.stringify(user_data)

    // POSTING TO BILLS
    let dev_api = `${process.env.REACT_APP_BACKEND_DEV_API}/picked_bills`
    let prod_api = `${process.env.REACT_APP_BACKEND_PROD_API}/picked_bills`

    let fetchObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(user_data)
    }

    return fetch(prod_api, fetchObj, console.log(fetchObj.body, "kkkkkkk"))
        .then(resp => resp.json())
        .then(resp => console.log(resp, '<============ HERE IS PARSED ANSWER'))
        .catch((error) => {
            console.error(error, "ERROR POSTING DATA");
        });
} 

// (used in): SavedBillsTable && SearchBills
export const handleBillChoiceClick = (pickedBill, choice, billList) => async dispatch => {

    fetchPostBill(pickedBill)

    let getIDS = billList.map((aBill) => aBill.bill_id)

    if (!getIDS.includes(pickedBill.bill_id) && choice === "isProductive") {
        dispatch({ type: CHOSE_PRODUCTIVE_BILL, payload: pickedBill })
    }

    if (!getIDS.includes(pickedBill.bill_id) && choice === "isConcerning") {
        dispatch({ type: CHOSE_CONCERNING_BILL, payload: pickedBill })
    }
}
