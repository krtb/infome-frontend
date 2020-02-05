import infoMeApi from '../apis/infomeAPI'

import { 
    AUTHENTICATING_USER, 
    SET_CURRENT_USER, 
    LOG_OUT_USER, 
    PROFILE_CHANGE,
    DISCARD_EDIT,
    EDIT_USER
} from './types'

export const authenticatingUser = () => ({ 
    type: AUTHENTICATING_USER 
})

export const setCurrentUser = userData => ({
    type: SET_CURRENT_USER,
    payload: userData
})

export const logOutUser = () => async dispatch => {
    localStorage.clear()
    dispatch({ type: LOG_OUT_USER })
}

// (API): LOG IN EXISTING USER
export const loginUser = (name, password) => async dispatch => {
    
    try {
        dispatch(authenticatingUser())

        const data = { user: { name, password } }

        const response = await infoMeApi.post('/login', data)
        // const { jwt } = await response.data
        const userJWT = await response.data.jwt
        const userData = await response.data.user

        localStorage.setItem('jwt', userJWT)
        localStorage.setItem('loggedIn', 'true')

        dispatch(setCurrentUser(userData))

    } catch (error) {
        console.log(error, "in loginUser(), session/actions/loginUser")
    }
}

// (API): CREATE NEW USER
export const createNewUser = (name, password) => async dispatch => {
    try {
        let userObject = {
            "user": {
                "name": name,
                "password": password
            }
        }

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        };
        
        infoMeApi.post('/users', userObject, axiosConfig)

    } catch (error) {
        console.log(error, "in createNewUser(), session/actions")
    }
}

// REQUEST PROFILE CHANGES || DISCARD CHANGES
export const clearChanges = (requestEdit, event, userCopy) => async dispatch => {
    // console.log(requestEdit, 'CLEARING')
    // if (event.target.name === 'clear'){
        dispatch({ type: DISCARD_EDIT })
    // } 
    // dispatch({ type: REQUEST_EDIT, payload: !requestEdit })
}

// SEND UPDATES TO REDUX STATE && EDIT USER PROFILE
export const controlledProfileChanges = (event, userCopy) => async dispatch => {  
    const name = event.target.name;
    const value = event.target.value;

    const newUserValues = {
        [name]: value
    };

    dispatch({ type: PROFILE_CHANGE, payload: newUserValues }) 
}

// (API): POST USER PROFILE CHANGES TO BACKEND API ON SAVE CLICK
export const editUserProfile = (user) => async dispatch => {
    try {
        console.log(user, ' edit user profile');
        
        let userObject = {
            "user": {
                "email": user.email,
                "name": user.name,
                "political_party": user.political_party,
                "zip_code": user.zip_code
            }
        }

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        };
        
        let postingUser = await infoMeApi.put(`/users/${user.id}`, userObject, axiosConfig)
        dispatch({ type: EDIT_USER, payload: userObject })

    } catch (error) {
        console.log(error, "editUserProfile(), session/actions")
    }
}
