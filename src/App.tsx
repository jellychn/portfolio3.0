import React, { createContext, useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
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
      <HashRouter>
        <NavBar />
        <Sliders setDesignDecisions={ setDesignDecisions } />
        <Routes>
          <Route path="/" element={<Home setIsDesign={setIsDesign} />}></Route>
          <Route path="/dev" element={<Home setIsDesign={setIsDesign} />}></Route>
          <Route path="/design" element={<Home setIsDesign={setIsDesign} />}></Route>
        </Routes>
      </HashRouter>
    </DesignDecisionsContext.Provider>
    </IsDesignContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));