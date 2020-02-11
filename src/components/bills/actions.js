import infoMeApi from '../apis/infomeAPI'
import { 
    FETCH_BILLS, 
    SEARCH, 
    FIND_BILL, 
    DELETE_BILL,
    CHOSE_PRODUCTIVE_BILL, 
    CHOSE_CONCERNING_BILL, 
    DELETE_PRODUCTIVE_BILL,
    DELETE_CONCERNING_BILL,
    PAGE_CHANGE,
    UPDATE_POSITIVE_SAVED_BILLS,
    UPDATE_NEGATIVE_SAVED_BILLS,
    UPDATE_SAVED_BILLS
    } from './types'

export const removeNullValues = (listOfBills) => {
    // (used in): fetchBills() below
    let nullValuesRemoved = listOfBills.filter((value) => {
        return value.description !== null;
    })
    return nullValuesRemoved
}


export const fetchBills = () => async dispatch => {
    // (used in): SearchBills
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
    };

    const response = await infoMeApi.get('/bills', axiosConfig); 

    const listOfBills = await response.data.bills

    let nullValuesRemoved = removeNullValues(listOfBills) 
       
    dispatch({ type: FETCH_BILLS, payload: nullValuesRemoved})

};

export const fetchSavedBills = () => async dispatch => {
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
    };

    let updated_saved_bills = await infoMeApi.get('/picked_bills', axiosConfig)    
    let user_saved_bills = await updated_saved_bills.data.picked_bills 
    let positiveBills = []
    let negativeBills = []

    user_saved_bills.map((oneBill) => {
        if (oneBill.user_opinion === 'positive') {
          return positiveBills.push(oneBill)
        }

        if (oneBill.user_opinion === 'negative') {
            return negativeBills.push(oneBill)
        }
       
    })
    
    dispatch({ type: UPDATE_NEGATIVE_SAVED_BILLS, payload: negativeBills })
    dispatch({ type: UPDATE_POSITIVE_SAVED_BILLS, payload: positiveBills })
}

export const searchTerm = searchTerm => dispatch => {
    // (used in): SearchBarsrc/components/bills/billsReducer.js
    searchTerm.preventDefault()

    dispatch({type: SEARCH, payload: searchTerm.target.value});
};

export const filterText = (searchTerm, initialBillList) => async dispatch => {
    // (used in): SearchBar
    let filteredText = initialBillList.filter((aBill) => (
        aBill.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        aBill.bill_number.toLowerCase().includes(searchTerm.toLowerCase())
        )
    )    

    let foundBill = await filteredText

    dispatch({ type: FIND_BILL, payload: foundBill })
}

export const postSavedBill = (pickedBill, user, billChoice) => async dispatch => {
    // (used in): SavedBillsTable && SearchBills, POST to Bills in RAILS API
    try {
        
        let user_id = user.id
        
        let billObject = {
            "picked_bill": {
                'user_id': user_id,
                'api_bill_id': pickedBill.api_bill_id,
                'bill_number': pickedBill.bill_number,
                'bill_url': pickedBill.bill_url,
                'chamber': pickedBill.chamber,
                'created_at': pickedBill.created_at,
                'description': pickedBill.description,
                'legislative_day': pickedBill.legislative_day,
                'updated_at': pickedBill.updated_at,
                'user_opinion': billChoice
            }
        }
        
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        };

        let postedBill = await infoMeApi.post(`/picked_bills`, billObject, axiosConfig)
        let updated_saved_bills = await infoMeApi.get('/picked_bills')
        let user_saved_bills = await updated_saved_bills.data.picked_bills
        
    } catch (error) {
        console.log(error, "postSavedBill(), bills/actions")
    }
} 

export const deleteSavedBill = (props) => async dispatch => {

    let delete_id = props.one.id

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
    };

    let backend_delete = await infoMeApi.delete(`/picked_bills/${delete_id}`, axiosConfig)

    return backend_delete
}

export const deleteBill = (listType, billNumber, props) => async dispatch => {
    // (used in): TODO: add where being used
    let delete_id = props.one.id
    deleteSavedBill(delete_id) //callback function above

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

export const setPageNumInState = (pageNumber) => async dispatch => {
    // (used in): BillsList
    dispatch({ type: PAGE_CHANGE, payload: pageNumber  })
}