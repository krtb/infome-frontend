import {
    FETCH_BILLS, 
    SEARCH, 
    FIND_BILL,
    DELETE_BILL,
    CHOSE_CONCERNING_BILL, 
    CHOSE_PRODUCTIVE_BILL
    } from './types';

const initialState = {
    searchTerm: '',
    initialBillList: [],
    alteredBillList: [],
    isProductive: 'isProductive',
    isConcerning: 'isConcerning',
    productiveBillsList: [],
    concerningBillsList: [],
}

const billsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BILLS:
            return {
                ...state,
                alteredBillList: action.payload,
                initialBillList: action.payload,
            }
        case FIND_BILL:
            return {
                ...state,
                alteredBillList: action.payload
            }
        case SEARCH:
            let text = action.payload
            return {
                ...state,
                searchTerm: text,
            }
        case CHOSE_PRODUCTIVE_BILL:
            return {
                ...state,
                productiveBillsList: [...state.productiveBillsList, action.payload]
            }
        case CHOSE_CONCERNING_BILL:
            return {
                ...state,
                concerningBillsList: [...state.concerningBillsList, action.payload]
            }
        case DELETE_BILL:
            return {
                ...state,
                productiveBillsList: action.payload,
                concerningBillsList: action.payload
            }
        default:
            return state
    }
}


export default billsReducer