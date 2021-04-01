//file for creating store(container) and pass it a empty reducer


import { createStore } from 'redux';
import rootReducer from "../reducers";
//creates a complete state tree of app


//empty reducer for now




const store=createStore(rootReducer);


//it returns complte state of app

export default store;

