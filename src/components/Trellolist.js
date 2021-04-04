//this file is for whole list component like :add a task etc
import React from "react";
import Trellocard from "./Trellocard";
import ActionButton from "./Actionbutton";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

//css for list
const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  height: 100%;
  padding: 8px;
  margin-right: 8px;
`;

const Trellolist = ({ title, cards, listID, index }) => {
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {(provided) => (
        <ListContainer
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={String(listID)}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <h4>{title}</h4>
                {cards.map((card, index) => (
                  <Trellocard
                    key={card.id}
                    index={index}
                    text={card.text}
                    id={card.id}
                    listID={listID}
                  />
                ))}
                {provided.placeholder}
                <ActionButton listID={listID} />
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
    </Draggable>
  );
};

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    height: "100%",
    padding: 8,
    marginRight: 8,
  },
};

export default Trellolist;