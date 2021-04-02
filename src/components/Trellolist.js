//this file is for whole list component like :add a task etc
import './Components.css'
import Trellocard from './Trellocard'
import Actionbutton from './Actionbutton'


import React from "react";


const TrelloList = ({ title, cards, listID }) => {
  return (
    <div style={styles.container}>
      <h3>{title}</h3>
      {cards.map((card) => (
        <Trellocard key={card.id} text={card.text} />
      ))}
      <Actionbutton listID={listID} />
    </div>
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

export default TrelloList;