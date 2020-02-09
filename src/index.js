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

const rootReducer = combineReducers(reducers);

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();