import Trellolist from './Trellolist'
import './Components.css'
//connects react-component to store
import { connect } from 'react-redux';
import React from 'react';


const  App =(props)=>{
  
    const { lists }=props;
    return (
      <div className="App">
        <h1>Rello</h1>
        <div style={styles.listsContainer}>
          {lists.map((list) => (
            <Trellolist title={list.title} cards={list.cards} />
          ))}
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


