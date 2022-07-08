import React from "react";
import "../styleComponent/Card.css";

export default function Card(props) {
    return (
        <div className="card_box">
            <h4>{props.artwork.title}</h4>
            <img src={props.artwork.imageSrc} alt="" />
            <div>
                <p>{props.artwork.content}</p>
            </div>
        </div> 
        
    )
}