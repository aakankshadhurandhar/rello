//file for list actions

import { CONSTANTS } from './index';

//function for adding list
export const addlist=(title)=>{
    return {

            type:CONSTANTS.ADD_LIST,
            payload:title,


    };
}