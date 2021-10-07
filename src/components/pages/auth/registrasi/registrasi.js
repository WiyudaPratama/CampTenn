import React from "react"
import "./registrasi.css"
import Logo from "../../../assets/image/logo.png"
import { Link } from "react-router-dom"
const Registrasi = () => {
  return (
    <div className="registrasi" id="registrasi">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 col-md-9">
            <div className="card shadow">
              <div className="card-body">
                <div className="header text-center mb-3">
                  <h1>Registrasi CampTenn</h1>
                  <p>Pesan sepuasnya dan ramah kantongnya</p>
                  <Link to="/">
                    <img src={Logo} alt="Logo" />
                  </Link>
                </div>
                <form>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Input your name" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <input type="number" className="form-control" placeholder="Input your phone number" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <input type="email" className="form-control" placeholder="input your email" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Input your password" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Confirm your password" />
                      </div>
                    </div>
                  </div>
                  <div className="d-grid gap-2 pt-3">
                    <button type="button" className="btn btn-registrasi py-2">Registrasi</button>
                  </div>
                </form>
                <div className="footer text-center mt-3">
                  <Link to="/auth/login" className="text-decoration-none" >Login </Link>
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

export default Registrasi