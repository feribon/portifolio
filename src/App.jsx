import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import React from "react";
import JogoDaVelha from "./pages/JogoDaVelha";
import About from "./pages/About";
import Contato from "./pages/Contato";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";
import "../src/styles/JogoDaVelha.css";

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <NavBar />
        <div className="flex justify-center mt-6 App">
          <Routes>
            <Route path="/" element={<JogoDaVelha />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contato" element={<Contato />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
