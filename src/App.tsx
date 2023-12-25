import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/nav-bar/NavBar";
import Sliders from "./components/sliders/Sliders";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Sliders />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));