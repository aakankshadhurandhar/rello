//file for creating store(container) and pass it a empty reducer


import { createStore } from 'redux';
//creates a complete state tree of app


//empty reducer for now
const reducer=()=>{}


const store=createStore(reducer);
//it returns complte state of app

export default store;

