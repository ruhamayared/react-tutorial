import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/profile">Profile</Link>
      <br />
      <Link to="/contact">Contact</Link>
    </div>
  )
}
