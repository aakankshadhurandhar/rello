//this file is for whole list component like :add a task etc
import './Components.css'

const Trellolist = ({title}) => {
    return (
        <div className="listclass" style={styles.container}>
            <p>{title}</p>
        </div>
    )
}
const styles = {
    container: {
     
      
      width: 300,
      padding: 8,
    },
  };

export default Trellolist;
