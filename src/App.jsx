import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contato from './pages/Contato';
import Error from './pages/Error';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
