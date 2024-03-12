import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ControlPanel } from "./ControlPanel.jsx";

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<ControlPanel/>}>
        <Route path={"about"} element={<div>about</div>}/>
        <Route path={"/dashboard/*"} element={<div>dash</div>} />
      </Route>
    </Routes>
  </BrowserRouter>;
};

export default App;
