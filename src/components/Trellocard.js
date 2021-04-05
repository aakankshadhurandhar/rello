//file for each card of list

import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";
import TrelloForm from "./Form";
import { editCard, deleteCard } from "../actions";
import { connect } from "react-redux";
import TrelloButton from "./TrelloButton";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

//css for cards
const CardContainer = styled.div`
  margin: 0 0 8px 0;
  position: relative;
  max-width: 100%;
  word-wrap: break-word;
`;

const EditButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  top: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;



const TrelloCard = React.memo(({ text, id, listID, index, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setText] = useState(text);

  

  const closeForm = e => {
    setIsEditing(false);
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  const saveCard = e => {
    e.preventDefault();

    dispatch(editCard(id, listID, cardText));
    setIsEditing(false);
  };

  const handleDeleteCard = e => {
    dispatch(deleteCard(id, listID));
  };

  const renderEditForm = () => {
    return (
      <TrelloForm text={cardText} onChange={handleChange} closeForm={closeForm}>
        <TrelloButton onClick={saveCard}>Save</TrelloButton>
      </TrelloForm>
    );
  };
//for drag and drop and entering text inside function
  const renderCard = () => {
    return (
      <div>
        <Draggable draggableId={String(id)} index={index}>
          {provided => (
            <CardContainer
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              onDoubleClick={() => setIsEditing(true)}
            >
              <Card>
                <EditIcon
                  onMouseDown={() => setIsEditing(true)}
                  fontSize="small"
                >
                 
                </EditIcon>
                <DeleteIcon fontSize="small" onMouseDown={handleDeleteCard}>
                  delete
                </DeleteIcon>

                <CardContent>
                  <Typography>{text}</Typography>
                </CardContent>
              </Card>
            </CardContainer>
          )}
        </Draggable>
      </div>
    );
  };

  return isEditing ? renderEditForm() : renderCard();
});

export default connect()(TrelloCard);
