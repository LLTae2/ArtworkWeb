import React, { useState } from "react";
import Nav from "../component/Nav";
import Intro from "../component/Intro";
import Card from "../component/Card";
import data from "../data";

export default function Home() {
    const [artwork, setArtwork] = useState(data);
    return (
        <div id="wrap">
            <Nav />
            <Intro />
            <div className="card_container">
                {
                artwork.map((a, i) => {
                    return <Card artwork={artwork[i]} key={i} />
                })
                }
            </div>
        </div>
    )
}