import './Errors.css'
import warning from '../../assets/Warning.png'
const Errors = ({errors}) => {
    if (errors.length !== 0){
        return (
            <div className="errors">
                <div id="warning">
                    <img  src={warning} alt="warning"></img>
                    
                </div>
                <div id="warningTextDiv">
                    <p id="problem">There Was a Problem</p>
                    <ul className="ul">
                        {Object.values(errors).map(error => <li className="errorItem" key={error.id}>{error}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Errors