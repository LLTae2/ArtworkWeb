import "../styleComponent/Nav.css";
import React from "react";

export default function Nav() {
    return (
        <div className="Nav_container">
            <div className="Nav_menu_box">
                <div className="Nav_menu">
                    <p className="Nav_menu_title">Artwork Collection</p>
                    <div>Home</div>
                    <div>Detail</div>
                    <div>Guest Book</div>
                </div>
            </div>
            <div className="Nav_search_box">
                <input className="Nav_search_input" placeholder="Search"/>
                <button className="Nav_search_button">Search</button>
            </div>
        </div>
    )
}