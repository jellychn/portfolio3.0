import React, { createContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/nav-bar/NavBar";
import Sliders from "./components/sliders/Sliders";

export const IsDesignContext = createContext(false);
export const DesignDecisionsContext = createContext(false);

export default function App() {
  const [isDesign, setIsDesign] = useState(false);
  const [designDecisions, setDesignDecisions] = useState(false);
  
  return (
    <IsDesignContext.Provider value={isDesign}>
    <DesignDecisionsContext.Provider value={designDecisions}>
      <BrowserRouter>
        <NavBar />
        <Sliders setDesignDecisions={ setDesignDecisions }  />
        <Routes>
          <Route path="/dev" element={<Home setIsDesign={setIsDesign} />}></Route>
          <Route path="/design" element={<Home setIsDesign={setIsDesign} />}></Route>
        </Routes>
      </BrowserRouter>
    </DesignDecisionsContext.Provider>
    </IsDesignContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));