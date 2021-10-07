import React from 'react'
import "./login.css"
import { Link } from "react-router-dom"
import Logo from "../../../assets/image/logo.png"

const Login = () => {
  return (
    <div className="login" id="login">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 col-md-9">
            <div className="card shadow">
              <div className="card-body">
                <div className="header text-center mb-3">
                  <h1>Login CampTenn</h1>
                  <p>Pesan sepuasnya dan ramah kantongnya</p>
                  <Link to="/">
                    <img src={Logo} alt="Logo" />
                  </Link>
                </div>
                <form>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Input your email" />
                  </div>
                  <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Input your password" />
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <div className="d-grid gap-2 pt-3">
                    <button type="button" className="btn btn-login py-2">Login</button>
                  </div>
                </form>
                <div className="footer text-center mt-3">
                  <Link to="/auth/registrasi" className="text-decoration-none" >Registrasi </Link>
                  |
                  <Link to="/auth/registrasi-mitra" className="text-decoration-none"> Bergabung Menjadi Mitra Kami</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login