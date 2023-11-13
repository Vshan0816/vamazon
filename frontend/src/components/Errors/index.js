import './Errors.css'

const Errors = ({errors}) => {
    if (errors.length !== 0){
        return (
            <div className="errors">
                <ul>
                    {Object.values(errors).map(error => <li key={error}>{error}</li>)}
                </ul>
            </div>
        )
    }
}

export default Errors