

import Trellolist from './Trellolist'
import './Components.css'
//connects react-component to store
import { connect } from 'react-redux';
import React from 'react';
import ActionButton from './Actionbutton';
import { DragDropContext,Droppable } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";
import './Components.css';
import countcard from '../reducers/listReducer'

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  @media (max-width: 767px) {
    flex-direction:column;
    align-items:center;
}
`;

const  App =( props )=>{
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) return;
    props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type,
      )
    );
  };
    const { lists }=props;
    return (
      
        <DragDropContext onDragEnd={onDragEnd}>
        <h1>Taskhub🐙</h1>
        
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {(provided) => (
            <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
              {lists.map((list, index) => (
                <Trellolist
                  key={list.id}
                  listID={list.id}
                  title={list.title}
                  cards={list.cards}
                  index={index}
                />
              ))}
              {provided.placeholder}
              <ActionButton list />
            </ListContainer>
          )}
        </Droppable>
         
        
        </DragDropContext>
      
    );
  }





//function to subscribe to store updates


const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);


