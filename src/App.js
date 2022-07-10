import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Artwork from "./pages/Artwork";


function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/artwork' element={<Artwork />} />
    </Routes>
  );
}

export default App;