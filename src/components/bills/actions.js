import getAllBills from '../apis/infomeAPI'
import { 
    FETCH_BILLS, 
    SEARCH, 
    FIND_BILL, 
    DELETE_BILL,
    CHOSE_PRODUCTIVE_BILL, 
    CHOSE_CONCERNING_BILL, 
    DELETE_PRODUCTIVE_BILL,
    DELETE_CONCERNING_BILL,
    PAGE_CHANGE
    } from './types'

// (used in): fetchBills() below
export const removeNullValues = (listOfBills) => {

    let nullValuesRemoved = listOfBills.filter((value) => {
        return value.description !== null;
    })
    return nullValuesRemoved
}

// (used in): SearchBills
export const fetchBills = () => async dispatch => {

    // changed from .get(fetchbills)
    const response = await getAllBills.get('/bills');        
    const listOfBills = await response.data.bills

    let nullValuesRemoved = removeNullValues(listOfBills)    

    dispatch({ type: FETCH_BILLS, payload: nullValuesRemoved})
};

// (used in): SearchBarsrc/components/bills/billsReducer.js
export const searchTerm = searchTerm => dispatch => {
    
    searchTerm.preventDefault()

    dispatch({type: SEARCH, payload: searchTerm.target.value});
};

// (used in): SearchBar
export const filterText = (searchTerm, initialBillList) => async dispatch => {

    let filteredText = initialBillList.filter((aBill) => (
        aBill.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        aBill.bill_number.toLowerCase().includes(searchTerm.toLowerCase())
        )
    )    

    let foundBill = await filteredText

    dispatch({ type: FIND_BILL, payload: foundBill })
}

// (used in): SavedBillsTable && SearchBills, POST to Bills in RAILS API
export const fetchPostBill = (bill) => {
    // TODO: refactor to use Async/Await
    //TODO: add new Bill class attributes, after backend API migration
    let user_data = bill
    JSON.stringify(user_data)

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
        .catch((error) => {
            console.error(error, "ERROR POSTING DATA");
        });
} 

// (used in): SavedBillsTable && SearchBills
export const handleBillChoiceClick = (pickedBill, choice, billList) => async dispatch => {
    // TODO: fix posting to back end, not going through due to security
   // fetchPostBill(pickedBill)

    let getIDS = billList.map((aBill) => aBill.bill_number)
    
    if (!getIDS.includes(pickedBill.bill_number) && choice === "isProductive") {
        dispatch({ type: CHOSE_PRODUCTIVE_BILL, payload: pickedBill })
    }

    if (!getIDS.includes(pickedBill.bill_number) && choice === "isConcerning") {
        dispatch({ type: CHOSE_CONCERNING_BILL, payload: pickedBill })
    }
}

// DELETE a bill
export const deleteBill = (listType, billNumber, props) => async dispatch => {

    let filteredList = listType.listType.filter((singleBill)=> {
        return singleBill.bill_number !== billNumber
    })  

    if (props.list === "productive"){
    dispatch({ type: DELETE_PRODUCTIVE_BILL, payload: filteredList })
    }

    if (props.list === "concerning"){
    dispatch({ type: DELETE_CONCERNING_BILL, payload: filteredList })
    }
    
}

// (used in): BillsList
export const setPageNumInState = (pageNumber) => async dispatch => {
    dispatch({ type: PAGE_CHANGE, payload: pageNumber  })
}