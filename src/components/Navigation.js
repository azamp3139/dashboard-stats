import '../styles/nav.css';
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav className="nav-container">
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/stats" className="nav-item">Job Stats</Link>
    </nav>
  )
}

export default Navigation;