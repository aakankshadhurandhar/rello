//file for each card of list

import React, { useState } from 'react';
import './Components.css';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import Form from './Form'

const CardContainer = styled.div`
margin: 0 0 8px 0;
position: relative;
max-width: 100%;
word-wrap: break-word;
`;





const Trellocard = ({ text,id,index}) => {
  const [editMode, setEditMode] = useState(false);
  const [cardText, setText] = useState(text);

  const closeForm = (e) => {
    setEditMode(false);
  };

  const saveCard = () => {};

  if (editMode)
    return (
      <Form
        text={cardText}
        setText={setText}
        closeForm={closeForm}
        onAction={saveCard}
      />
    );
    return (
       
        <Draggable draggableId={String(id)} index={index}>
        {(provided) => (
          <CardContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card>
              <CardContent>
                <Typography >{text}</Typography>
              </CardContent>
            </Card>
          </CardContainer>
        )}
      </Draggable>
    );
}
const styles = {
    cardContainer: {
      marginBottom: 8,
    },
  };

export default Trellocard
