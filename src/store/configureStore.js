import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../components';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore() {
    
    const rootReducer = combineReducers(reducers);

    return createStore(
        rootReducer,
        composeWithDevTools(
        applyMiddleware(thunk)
        ),
    );
}