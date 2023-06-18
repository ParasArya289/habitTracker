import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Habit Tracker</Link>
      <Link to="/archive">Archive</Link>
    </nav>
  );
};
