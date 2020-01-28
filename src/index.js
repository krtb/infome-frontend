import React from 'react';
import ReactDOM from 'react-dom';
// REDUX
import * as reducers from './components';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
// ROUTER
import { BrowserRouter as Router } from 'react-router-dom';
// APP
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';



const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.log(e, 'error in index.js')
    }
};

const rootReducer = combineReducers(reducers);
const peristedState = loadState();

const store = createStore(
    rootReducer,
    peristedState,
    composeWithDevTools(applyMiddleware(thunk)
    ));

store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
