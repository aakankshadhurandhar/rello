//this file is for whole list component like :add a task etc
import './Components.css'
import Trellocard from './Trellocard'

const Trellolist = ({title,cards}) => {
    return (
        <div className="listclass" >
            
            <h2>{title}</h2>
           {/*map through cards so now if text is entered it is mapped to title */}

            {
                cards.map((card)=>

                <Trellocard text={card.text}/>

                )
            
            }
        </div>
    )
}


export default Trellolist;
