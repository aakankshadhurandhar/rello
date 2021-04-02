import React, { Component } from "react";
import { Icon, Card, Button } from "@material-ui/core";
import Textarea from "react-textarea-autosize";
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

class ActionButton extends Component {
  state = {
    formOpen: false,
    text: "",
  };
  //function for opraning the add text
  openForm = () => {
    this.setState({ formOpen: true });
  };
  //function for closing the add text
  closeForm = (e) => {
    this.setState({ formOpen: false });
  };
  //function for entering input in text
  handleInputChange = (e) => {
    this.setState({ text: e.target.value });
  };
  //add button 
  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "black" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

    return (
      <div
        onClick={this.openForm}
        style={{
          ...styles.openFormButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
        }}
      >
        <AddIcon>add</AddIcon>
        <p>{buttonText}</p>
      </div>
    );
  };
  //form rendering
  renderForm = () => {
    const { list } = this.props;

    const placeholder = list
      ? "Enter list title..."
      : "Enter a title for this card...";
    const buttonTitle = list ? "Add List" : "Add Card";

    return (
      <div>
        <Card
          style={{
            minHeight: 80,
            minWidth: 472,
            padding: "6px 8px 2px",
          }}
        >
          <Textarea
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
            style={{
              resize: "none",
              width: "100%",
              overflow: "hidden",
              outline: "none",
              border: "none",
           
            }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            variant="contained"
            style={{ color: "white", backgroundColor: "black" }}
          >
            {buttonTitle}
          </Button>
          <CloseIcon style={{ marginLeft: 1, cursr: "pointer" }}> c </CloseIcon>
        </div>
      </div>
    );
  };
//giving optins to either render form or add button
  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

const styles = {
  openFormButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 300,
    paddingLeft: 5,
  },
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center",
  },
};

export default ActionButton;