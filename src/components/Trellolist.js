//this file is for whole list component like :add a task etc
import './Components.css'
import Trellocard from './Trellocard'

const Trellolist = ({title}) => {
    return (
        <div className="listclass" >
            
            <h2>{title}</h2>
            <Trellocard />
        </div>
    )
}


export default Trellolist;
