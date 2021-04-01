//reducer file for list

import React from 'react';
// initial state for reducer in array of list and each list has an array of cards
const initialState=[
        {
                title:'task1',
                id:0,
                cards: [
                    {
                      id: 0,
                      text: "update unit tests",
                    },
                    {
                      id: 1,
                      text: "Add icons",
                    },
                  ],


        }


]



//function that take current state and action and returns new state
const Listreducer = (state=initialState,action) => {
    switch(action.type){
                default:
                    return state;


    }





};
export default Listreducer;


//now import this to index.js reducer