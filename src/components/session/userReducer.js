import { 
    LOG_OUT_USER,
    AUTHENTICATING_USER,
    AUTHENTICATED_USER,
    SET_CURRENT_USER,
    FAILED_LOGIN,
    PROFILE_CHANGE,
    DISCARD_EDIT,
    REQUEST_EDIT,
    EDIT_USER
} from './types';

const initialState = {
    user: null,
    userCopy: null,
    requestEdit: true,
    loggedIn: false,
    authenticatingUser: false,
    failedLogin: false,
    error: null,
    edited: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_CURRENT_USER:
            return { 
                ...state, 
                user: action.payload, 
                userCopy: action.payload,
                requestEdit: false,
                loggedIn: true, 
            }
        case AUTHENTICATING_USER:
            return { 
                ...state, 
                authenticatingUser: true 
            }
        case AUTHENTICATED_USER:
            return { 
                ...state, 
                authenticatingUser: false 
            }
        case FAILED_LOGIN:
            return {
                ...state,
                failedLogin: true,
                error: action.payload,
                authenticatingUser: false
            }
        case LOG_OUT_USER:
            return {
                state
            }
        case REQUEST_EDIT:
            return {
                ...state,
                requestEdit: action.payload
            }
        case DISCARD_EDIT:
            return {
                ...state,
                user: state.userCopy
            }
        case PROFILE_CHANGE:

            let merged = {...state.user, ...action.payload}

            return {
                ...state,
                user: merged
            }
        case EDIT_USER:
            
            let mergedEdit = { ...state.user, ...action.payload }

            return {
                ...state,
                userCopy: mergedEdit,
                user: mergedEdit
            }
        default:
            return state
    }
}

export default userReducer