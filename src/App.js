import React, { useState } from "react";
import Nav from "./component/Nav";
import "./App.css";
import Intro from "./component/Intro";
import data from "./data";
import Card from "./component/Card";

function App() {
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
  );
}

export default App;
//https://joy-codeing-lee.tistory.com/98