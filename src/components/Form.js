import React from "react";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";
import Textarea from "react-textarea-autosize";
import Card from "@material-ui/core/Card";
import CloseIcon from '@material-ui/icons/Close';
//css of button and container
const Container = styled.div`
  width: 284px;
  margin-bottom: 8px;
`;

const StyledCard = styled(Card)`
  min-height: 85px;
  padding: 6px 8px 2px;
`;

const StyledTextArea = styled(Textarea)`
  resize: none;
  width: 100%;
  overflow: hidden;
  outline: none;
  border: none;
`;

const ButtonContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: cente;
  margin-left: 8px;
`;


//function for entering in lists and cards
const TrelloForm = React.memo(
  ({ list, text = "", onChange, closeForm, children }) => {
    const placeholder = list
      ? "Enter list title..."
      : "Enter a title for this card...";

    return (
      <Container>
        <StyledCard>
          <StyledTextArea
            placeholder={placeholder}
            autoFocus
            value={text}
            onChange={e => onChange(e)}
            onBlur={closeForm}
          />
        </StyledCard>
        <ButtonContainer>
          {children}
          <CloseIcon onMouseDown={closeForm}></CloseIcon>
        </ButtonContainer>
      </Container>
    );
  }
);

export default TrelloForm;
