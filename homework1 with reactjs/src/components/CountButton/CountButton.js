import React, {useState} from "react"
import "./CountButton.css"

const CountButton = (props) =>{

    let [currentCount, setCurrentCount] = useState(0)


    const handleClick = () =>{
        setCurrentCount(currentCount+ props.incrementBy)
    }

    const buttonStyle = {
        color: props.buttonColor,
        borderRadius: "1px solid black",   
        background: "white",     
    }

    const divStyle = {
        color:props.buttonColor,
        
    }

    return(
        <div>
            <button style={buttonStyle} onClick={handleClick}> {props.incrementBy} </button>
            <div className={"count-display"}>{currentCount}</div>
        </div>
    )
}

export default CountButton