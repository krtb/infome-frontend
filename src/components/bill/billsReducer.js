import {FETCH_BILLS, SEARCH, FIND_BILL} from './types'

const initialState = {
    searchTerm: "",
    initial_bill_list: [],
    altered_bill_list: []
}

const billsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BILLS:
            return {
                ...state,
                altered_bill_list: action.payload,
                initial_bill_list: action.payload,
            }
        case FIND_BILL:
            return {
                ...state,
                altered_bill_list: action.payload
            }
        case SEARCH:
            let text = action.payload
            return {
                ...state,
                searchTerm: text,
            }
        default:
            return state
    }
}


export default billsReducer