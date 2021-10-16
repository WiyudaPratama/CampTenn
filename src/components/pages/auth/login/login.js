import React, { useState } from 'react'
import "./login.css"
import { Link } from "react-router-dom"
import Logo from "../../../assets/image/logo.png"
import { useHistory } from "react-router-dom"
import axios from "axios"

const Login = () => {
  // define state
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  // define state validation
  const [validation, setValidation] = useState("")

  // define history
  const history = useHistory()

  // function loginHandler
  const loginHandler = async (e) => {
    e.preventDefault()

    // initialize formData
    const formData = new FormData()

    // append data to formData
    formData.append('email', email)
    formData.append('password', password)

    // send data to server
    await axios.post('http://localhost:8000/api/login', formData)
    .then((response) => {

      // set token to localStorage
      localStorage.setItem('token', response.data.token)

      // redirect to home
      history.push('/')

    })
    .catch((error) => {
      // assign error to state
      setValidation(error.response.data)
    })
  }

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
                  {
                    validation.message && (
                      <div className="alert alert-danger" role="alert">
                        {validation.message}
                      </div>
                    )
                  }
                </div>
                <form onSubmit={loginHandler}>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Input your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {
                      validation.email && (
                        <p className="text-danger">
                          {validation.email[0]}
                        </p>
                      )
                    }
                  </div>
                  <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Input your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {
                      validation.password && (
                        <p className="text-danger">
                          {validation.password[0]}
                        </p>
                      )
                    }
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <div className="d-grid gap-2 pt-3">
                    <button type="submit" className="btn btn-login py-2">Login</button>
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