import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Artwork from "./pages/Artwork";
import Detail from "./pages/Detail";


function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/artwork' element={<Artwork />} />
      <Route exact path="/detail" element={<Detail />} />
    </Routes>
  );
}

export default App;