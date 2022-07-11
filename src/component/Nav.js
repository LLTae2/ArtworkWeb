import "../styleComponent/Nav.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="Nav_container">
            <div className="Nav_menu_box">
                <div className="Nav_menu">
                    <p className="Nav_menu_title">Artwork Collection</p>
                    <Link className="Nav_menu_link" to='/'>
                        <div>Home</div>
                    </Link>
                    <Link className="Nav_menu_link" to='/artwork'>
                        <div>Artwork</div>
                    </Link>
                    <Link className="Nav_menu_link" to='/detail'>
                        <div>Detail</div>
                    </Link>
                </div>
            </div>
            <div className="Nav_search_box">
                <input className="Nav_search_input" placeholder="Search"/>
                <button className="Nav_search_button">Search</button>
            </div>
        </div>
    )
}