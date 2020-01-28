import infoMeApi from '../apis/infomeAPI'

import { 
    AUTHENTICATING_USER, 
    SET_CURRENT_USER, 
    LOG_OUT_USER, 
    PROFILE_CHANGE,
    REQUEST_EDIT,
    DISCARD_EDIT
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
        const { jwt } = await response.data
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
export const onEditClick = (requestEdit, event, userCopy) => async dispatch => {

    if (event.target.name === 'discard'){
        dispatch({ type: DISCARD_EDIT, payload: !requestEdit })
    } 

    dispatch({ type: REQUEST_EDIT, payload: !requestEdit })
}

// SEND UPDATES TO REDUX STATE && EDIT USER PROFILE
export const updateUserInfo = (event, userCopy) => async dispatch => {  
    event.preventDefault()

    const name = event.target.name;
    const value = event.target.value;

    const newUserValues = {
        ...userCopy,
        [name]: value
    };

    dispatch({ type: PROFILE_CHANGE, payload: newUserValues })
    
}

// (API): POST USER PROFILE CHANGES TO BACKEND API ON SAVE CLICK
export const updateUserProfile = (event, userCopy) => async dispatch => {
    event.preventDefault()

    try {

        let userObject = {
            "user": {
                "name": userCopy.name,
            }
        }

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        };
        
        let postingUser = await infoMeApi.put(`/users/${userCopy.id}`, userObject, axiosConfig)
        // TODO: pull in new user profile info
        // TODO: display success
        // TODO: route back to edit page
        console.log(postingUser, 'in updateUserProfile(), session/actions')
        
    } catch (error) {
        console.log(error, "updateUserProfile(), session/actions")
    }
}
