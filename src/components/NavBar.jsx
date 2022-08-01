import React from 'react';
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <div className="bg-cyan-300 rounded-md m-1">
      <ul className=" flex justify-around">
        <li>
          <Link to="/" className="hover:underline">
            Jogo da Velha
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link to="/contato" className="hover:underline">
            Contato
          </Link>
        </li>
      </ul>
    </div>
  );
}
