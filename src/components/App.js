

import React, { Component } from "react";
import Trellolist from "./Trellolist";
import { connect } from "react-redux";
import ActionButton from "./Actionbutton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";
import './Components.css'

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends Component {
  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <h2>Rello</h2>
        <ListContainer>
          {lists.map((list) => (
            <Trellolist
              key={list.id}
              listID={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <ActionButton list />
        </ListContainer>
      </DragDropContext>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
