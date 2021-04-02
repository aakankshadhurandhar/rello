

import Trellolist from './Trellolist'
import './Components.css'
//connects react-component to store
import { connect } from 'react-redux';
import React from 'react';
import Actionbutton from './Actionbutton';
import { DragDropContext } from "react-beautiful-dnd";


const  App =( props )=>{
   const onDragEnd = () => {};
    const { lists }=props;
    return (
      
        <DragDropContext onDragEnd={onDragEnd}>
        <h1>Rello</h1>
        <div className="App">
        <div style={styles.listsContainer}>
          {lists.map((list) => (
            <Trellolist   
            key={list.id}
            listID={list.id}
            title={list.title}
            cards={list.cards}
            
            
            />
          ))}
          <Actionbutton list />
        </div>
        </div>
        </DragDropContext>
      
    );
  }





//function to subscribe to store updates
const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
  },
};

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);


