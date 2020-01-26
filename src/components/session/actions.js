import infoMeApi from '../apis/infomeAPI'
import { AUTHENTICATING_USER, SET_CURRENT_USER, LOG_OUT_USER } from './types'

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

export const loginUser = (name, password) => async dispatch => {
    
    try {
        dispatch(authenticatingUser())

        const data = { user: { name, password } }

        const response = await infoMeApi.post('/login', data)
        
        const userJWT = await response.data.jwt
        const userData = await response.data.user

        localStorage.setItem('jwt', userJWT)
        localStorage.setItem('loggedIn', 'true')

        dispatch(setCurrentUser(userData))

    } catch (error) {
        console.log(error, "in loginUser(), session/actions/loginUser")
    }
}


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
        console.log(error, "in createNewUser(), session/actions/loginUser")
    }
}
