import React from "react";
import './Greet.css'


function GreetingCard(props){
    return(

        <div className="greeting-card">
           <h1>Greetings to everyone</h1>
         <p>My names are {props.name}</p>
        <p>I am {props.Age} years old</p>
    
        <p>A student at {props.School}</p>

        
        <p>I live in {props.Address}</p>
        </div>
    )
}

export default GreetingCard;