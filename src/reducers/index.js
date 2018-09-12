import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer'
import myTestReducer from './myTestReducer'
import usersReducer from './usersReducer'
//import top level reducers



const rootReducer = combineReducers({
    //your reducers here
    exampleState: exampleReducer,
    myTestReducer: myTestReducer,
    usersReducer: usersReducer,
})

export default rootReducer;