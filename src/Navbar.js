import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/menu">Menu</Link>
      <br />
      <Link to="/contact">Contact</Link>
    </div>
  )
}
