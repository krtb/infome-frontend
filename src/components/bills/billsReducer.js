import {
    FETCH_BILLS, 
    SEARCH, 
    FIND_BILL,
    DELETE_BILL,
    CHOSE_CONCERNING_BILL, 
    CHOSE_PRODUCTIVE_BILL,
    DELETE_PRODUCTIVE_BILL,
    DELETE_CONCERNING_BILL,
    UPDATE_POSITIVE_SAVED_BILLS,
    UPDATE_NEGATIVE_SAVED_BILLS,
    PAGE_CHANGE,
    UPDATE_SAVED_BILLS
    } from './types';

const initialState = {
    searchTerm: '',
    initialBillList: [],
    alteredBillList: [],
    isProductive: 'isProductive',
    isConcerning: 'isConcerning',
    productiveBillsList: [],
    concerningBillsList: [],
    itemsPerPage: 10,
    page: 1,
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
                page: 1,
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
        case DELETE_PRODUCTIVE_BILL:
            return {
                ...state,
                productiveBillsList: action.payload,
            }
        case DELETE_CONCERNING_BILL:
            return {
                ...state,
                concerningBillsList: action.payload,
            }
        case PAGE_CHANGE:
            return {
                ...state,
                page: action.payload
            }
        case UPDATE_POSITIVE_SAVED_BILLS:
            return {
                ...state,
                productiveBillsList: action.payload
            }
        case UPDATE_NEGATIVE_SAVED_BILLS:
            return {
                ...state,
                concerningBillsList: action.payload
            }
        default:
            return state
    }
}


export default billsReducer