import './NewComponent.css';

function NewComponent(props){
    return (
        <div className="new-component">
            <div>{props.date.toISOString()}</div>
            <div className="new-component-detail">
                <h2>{props.title}</h2>
                <div className="new-component-price">${props.amount}</div>
            </div>
        </div>
    )
}

export default NewComponent;