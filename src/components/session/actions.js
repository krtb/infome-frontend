import infoMeApi from '../apis/infomeAPI'
import { AUTHENTICATING_USER, SET_CURRENT_USER } from './types'

export const authenticatingUser = () => ({ 
    type: AUTHENTICATING_USER 
})

export const setCurrentUser = userData => ({
    type: SET_CURRENT_USER,
    payload: userData
})

export const createNewUser = (name, password) => async dispatch => {
    try {
        // TODO: add json formatting type in object sent
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

export const loginUser = (name, password) => async dispatch => {
    try {
        dispatch(authenticatingUser())

        const data = { user: { name, password } }
        const response = await infoMeApi.post('/login', data)

        const userJWT = await response.data.jwt
        const userData = await response.data.user
        
        localStorage.setItem('jwt', userJWT)
        dispatch(setCurrentUser(userData))

    } catch (error) {
        console.log(error, "in loginUser(), session/actions/loginUser")
    }
    // async always returns a promise, https://scotch.io/tutorials/asynchronous-javascript-using-async-await
}