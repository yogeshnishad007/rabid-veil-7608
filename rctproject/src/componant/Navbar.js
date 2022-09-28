import { Link, useMatch, useResolvedPath } from "react-router-dom"
import PopupGfg from "../componant/Modal"

export default function Navbar() {
  return (
    <nav className="nav">
        <img src="logosnew.png" className="logo"></img>

        <PopupGfg/>


      {/* <Link to="/" rel="icon"  className="site-title">
        Site Name
      </Link> */}
      {/* <ul>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul> */}



    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}