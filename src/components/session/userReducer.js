import { 
    LOG_OUT_USER,
    AUTHENTICATING_USER,
    AUTHENTICATED_USER,
    SET_CURRENT_USER,
    FAILED_LOGIN,
    PROFILE_CHANGE,
    DISCARD_EDIT,
    REQUEST_EDIT
} from './types';

const initialState = {
    user: null,
    userCopy: null,
    requestEdit: true,
    loggedIn: false,
    authenticatingUser: false,
    failedLogin: false,
    error: null
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
                userCopy: {...state.user}
            }
        case PROFILE_CHANGE:
            return {
                ...state,
                userCopy: action.payload
            }
        default:
            return state
    }
}

export default userReducer