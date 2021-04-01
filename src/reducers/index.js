//We don't create more than one store in an application! Instead, use combineReducers to create a single root reducer out of many.

import { combineReducers } from 'redux';
//importing from listreducers
import listreducers from './Listreducer';




export default combineReducers({
        mylists:listreducers,


});