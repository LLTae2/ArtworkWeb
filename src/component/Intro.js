import React from "react";
import "../styleComponent/Intro.css";

export default function Intro() {
    return (
        <div className="intro_container">
            <div className="intro_box">
                <p className="intro_box_title">Hello, Taehyun!</p>
                <p className="intro_box_content">Many artists live in poverty without being recognized in their lifetime, and only after going through a new process of interpretation and rediscovery make they earn money and honor.</p>
                <button className="intro_box_button">Learn more</button>
            </div>
            
        </div>
    )
}