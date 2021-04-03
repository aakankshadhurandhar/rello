//file for each card of list

import React from 'react';
import './Components.css';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
<<<<<<< HEAD

=======
>>>>>>> parent of 5501bf3... now we can drag and drop across columns

const CardContainer = styled.div`
  margin-bottom: 8px;
`;





const Trellocard = ({ text,id,index}) => {
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
                <Typography gutterBottom>{text}</Typography>
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
