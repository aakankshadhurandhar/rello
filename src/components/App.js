

import Trellolist from './Trellolist'
import './Components.css'
//connects react-component to store
import { connect } from 'react-redux';
import React from 'react';
import Actionbutton from './Actionbutton';
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";
import './Components.css'

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const  App =( props )=>{
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };
    const { lists }=props;
    return (
      
        <DragDropContext onDragEnd={onDragEnd}>
        <h1>Rello</h1>
        <ListContainer>
          {lists.map((list) => (
            <Trellolist
              key={list.id}
              listID={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <Actionbutton list />
        </ListContainer>
         
        
        </DragDropContext>
      
    );
  }





//function to subscribe to store updates


const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);


