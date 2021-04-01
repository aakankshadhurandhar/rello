import Trellolist from './Trellolist'
import './Components.css'
//connects react-component to store
import { connect } from 'react-redux';
function App() {
  return (
    <div>
      <h1>Rello</h1>
      <Trellolist title='test'/>
    </div>
  );
}



//function to subscribe to store updates
const mapStateToProps = (state) => ({ lists: state.lists })
export default connect(mapStateToProps)(App);
