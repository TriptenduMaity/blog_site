import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/create">Create Post</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
};

export default Navbar;
