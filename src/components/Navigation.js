import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/stats">Job Stats</Link>
    </nav>
  )
}

export default Navigation;