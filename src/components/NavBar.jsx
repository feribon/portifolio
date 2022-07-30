import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <div className="text-red-500">
      <ul className=" flex justify-around">
        <li>
          <Link to="/" className="hover:underline">
            Home
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
