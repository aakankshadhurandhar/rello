//file for button css and action


import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";


const StyledButton = styled(Button)`
  && {
    color: white;
    background:#5B21B6;
  }
`;

const TrelloButton = ({ children, onClick }) => {
  return (
    <StyledButton variant="contained" onMouseDown={onClick}>
      {children}
    </StyledButton>
  );
};

export default TrelloButton;
