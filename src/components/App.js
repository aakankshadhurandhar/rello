

import Trellolist from './Trellolist'
import './Components.css'
//connects react-component to store
import { connect } from 'react-redux';
import React from 'react';
import Actionbutton from './Actionbutton';


const  App =( props )=>{
  
    const { lists }=props;
    return (
      <div className="App">
        <h1>Rello</h1>
        <div style={styles.listsContainer}>
          {lists.map((list) => (
            <Trellolist   
            key={list.id}
            listID={list.id}
            title={list.title}
            cards={list.cards}
            
            
            />
          ))}
          <Actionbutton list />
        </div>
      </div>
    );
  }





//function to subscribe to store updates
const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
  },
};

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);


