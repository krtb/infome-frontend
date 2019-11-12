import {FETCH_BILLS, SEARCH} from './types'


const initialState = {
    searchTerm: "",
    upcoming_bill_data: [],
    changing_upcoming_bill_data: []
}

const getBillsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BILLS:
            return {
                ...state,
                changing_upcoming_bill_data: action.payload,
                upcoming_bill_data: action.payload,
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


export default getBillsReducer