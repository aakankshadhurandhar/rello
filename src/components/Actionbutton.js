//button for adding add button

import React,{ useState } from 'react'
import TextArea from 'react-textarea-autosize';
import { Icon,Card,Button } from '@material-ui/core';

function Actionbutton() {

    //set initial value
    const [formOpen,setformOpen]=useState('false');
    const [text,settext]=useState(' ');

    //function for openform
    const openForm=() => {
            setformOpen('true');

    }
    //function for close form
    const closeForm=()=>{
        setformOpen('false');
    }
    //set input change
    const handleinputchange=(e)=>{
        settext(e.target.value);
    }
    //render button function :what happens when add is clicked
    const Addbutton=(props)=>{
        const { list }=props;
        const buttonText = list ? "Add another list" : "Add another card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

        return (
            <div
              onClick={openForm}
              style={{
                ...styles.openFormButtonGroup,
                opacity: buttonTextOpacity,
                color: buttonTextColor,
                backgroundColor: buttonTextBackground,
              }}
            >
              <Icon>add</Icon>
              <p>{buttonText}</p>
            </div>
          );



    };

    //function for rendering forms (open/closing)it
    const renderform=(props)=>{
        const { list }=props;
        const placeholder = list
      ? "Enter list title..."
      : "Enter a title for this card...";
    const buttonTitle = list ? "Add List" : "Add Card";

    return (
      <div>
        <Card
          style={{
            minHeight: 80,
            minWidth: 272,
            padding: "6px 8px 2px",
          }}
        >
          <Textarea
            placeholder={placeholder}
            autoFocus
            onBlur={closeForm}
            value={state.text}
            onChange={handleInputChange}
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
            style={{ color: "white", backgroundColor: "#5aac44" }}
          >
            {buttonTitle}
          </Button>
          <Icon style={{ marginLeft: 8, cursr: "pointer" }}>close</Icon>
        </div>
      </div>
    );



    }


    return (
        state.formOpen ? renderForm() : AddButton())
        ;
    
}
const styles = {
    openFormButtonGroup: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      borderRadius: 3,
      height: 36,
      width: 272,
      paddingLeft: 10,
    },
    formButtonGroup: {
      marginTop: 8,
      display: "flex",
      alignItems: "center",
    },
  };
export default Actionbutton
