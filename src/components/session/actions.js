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

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
})

export const logOutUser = () => async dispatch => {
    localStorage.clear()
    dispatch({ type: LOG_OUT_USER })
}

// (API): LOG IN EXISTING USER
export const loginUser = (name, password) => async dispatch => {
    
    try {
        // JSON.STRINGIFY USER?
        dispatch(authenticatingUser())
        const data = {name, password }
        const response = await infoMeApi.post('/login', data)
        let { jwt, user } = response.data
        localStorage.setItem('jwt', jwt)
        localStorage.setItem('loggedIn', 'true')
        dispatch(setCurrentUser(user))

    } catch (error) {
        console.log(error, "in loginUser(), session/actions/loginUser")
    }
}

export const findCurrentUser = () => async dispatch => {
    // this maintaints user in local storage, while keeping JWT in backend
    // used in AuthWrapper
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
    };

    const repsonse = await infoMeApi.get('/profile', axiosConfig)

    let { user } = repsonse.data

    dispatch(setCurrentUser(user))
}

export const createNewUser = (name, password) => async dispatch => {
    // (API): CREATE NEW USER
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
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        };
        
        let response = await infoMeApi.post('/users', userObject, axiosConfig)

        let new_user = response.data

        dispatch(loginUser(name, password))
        return new_user

    } catch (error) {
        console.log(error, "in createNewUser(), session/actions")
    }
}

export const clearChanges = (requestEdit, event, userCopy) => async dispatch => {
    // REQUEST PROFILE CHANGES || DISCARD CHANGES

    // console.log(requestEdit, 'CLEARING')
    // if (event.target.name === 'clear'){
        dispatch({ type: DISCARD_EDIT })
    // } 
    // dispatch({ type: REQUEST_EDIT, payload: !requestEdit })
}

export const controlledProfileChanges = (event, userCopy) => async dispatch => { 
    // SEND UPDATES TO REDUX STATE && EDIT USER PROFILE
    const name = event.target.name;

    const value = event.target.value;

    const newUserValues = {
        [name]: value
    };

    dispatch({ type: PROFILE_CHANGE, payload: newUserValues }) 
}

export const editUserProfile = (user) => async dispatch => {
    // (API): POST USER PROFILE CHANGES TO BACKEND API ON SAVE CLICK
    try {        
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
