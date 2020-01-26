import { 
    LOG_OUT_USER,
    AUTHENTICATING_USER,
    AUTHENTICATED_USER,
    SET_CURRENT_USER,
    FAILED_LOGIN
} from './types';

const initialState = {
    user: null,
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
        default:
            return state
    }
}

export default userReducer