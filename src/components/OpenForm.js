//function for opeaning form and add button
import React from "react";

import styled from "styled-components";
import AddIcon from '@material-ui/icons/Add';

const TrelloOpenForm = ({ list, children, onClick }) => {
  const buttonTextOpacity = list ? 1 : 0.5;
  const buttonTextColor = list ? "white" : "inherit";
  const buttonTextBackground = list ? "#6D28D9" : "inherit";
//css for openbutton
  const OpenFormButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;
    height: 36px;
    margin-left: 8px;
    width: 300px;
    padding-left: 10px;
    padding-right: 10px;
    opacity: ${buttonTextOpacity};
    color: ${buttonTextColor};
    background-color: ${buttonTextBackground};
  `;

  return (
    <OpenFormButton onClick={onClick}>
      <AddIcon></AddIcon>
      <p style={{ flexShrink: 0 }}>{children}</p>
    </OpenFormButton>
  );
};

export default TrelloOpenForm;
