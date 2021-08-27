import "./navbar.css"
import logo from "../../assets/image/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
      <div className="container">
        <a  className="navbar-brand">
          <img src={logo} alt="Logo"></img>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item d-grid">
              {/* Mobile Button */}
              <a href="#" className="d-sm-block d-md-none btn btn-login">Login</a>
              {/* Dekstop Button */}
              <a href="#" className="my-2 my-lg-0 d-none d-md-block btn btn-login me-lg-4">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar