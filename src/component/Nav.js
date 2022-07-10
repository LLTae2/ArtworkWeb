import "../styleComponent/Nav.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="Nav_container">
            <div className="Nav_menu_box">
                <div className="Nav_menu">
                    <p className="Nav_menu_title">Artwork Collection</p>
                    <Link to='/'>
                        <div>Home</div>
                    </Link>
                    <Link to='/artwork'>
                        <div>Artwork</div>
                    </Link>
                    <div>Detail</div>
                </div>
            </div>
            <div className="Nav_search_box">
                <input className="Nav_search_input" placeholder="Search"/>
                <button className="Nav_search_button">Search</button>
            </div>
        </div>
    )
}