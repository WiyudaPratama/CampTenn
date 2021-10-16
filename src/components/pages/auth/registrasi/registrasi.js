import React, {useState} from "react"
import "./registrasi.css"
import Logo from "../../../assets/image/logo.png"
import { Link, useHistory } from "react-router-dom"
import axios from "axios"

const Registrasi = () => {
  // define state
  const [name, setName] = useState("")
  const [no_telp, setTelp] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password_confirmation, setPasswordConfirmation] = useState("")

  // define state validation
  const [validation, setValidation] = useState([])

  // define history
  const history = useHistory()

  // define function "registerHandler"
  const registerHandler = async (e) => {
    e.preventDefault()

    // initialize formData
    const formData = new FormData()

    // append data to formData
    formData.append('name', name)
    formData.append('no_telp', no_telp)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('password_confirmation', password_confirmation)

    // send data to server
    await axios.post('http://localhost:8000/api/register', formData)
    .then(() => {

      // redirect to login page
      history.push('/auth/login')
    })
    .catch((error) => {

      // assign error to state
      setValidation(error.response.data)
    })
  }

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
                <form onSubmit={registerHandler}>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Input your name" value={name} onChange={(e) => setName(e.target.value)} />
                      </div>
                      {
                        validation.name && (
                          <p className="text-danger">
                            {validation.name[0]}
                          </p>
                        )
                      }
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <input type="number" className="form-control" placeholder="Input your phone number" value={no_telp} onChange={(e) => setTelp(e.target.value)} />
                      </div>
                      {
                        validation.no_telp && (
                          <p className="text-danger">
                            {validation.no_telp[0]}
                          </p>
                        )
                      }
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <input type="email" className="form-control" placeholder="input your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </div>
                    </div>
                    {
                      validation.email && (
                        <p className="text-danger">
                          {validation.email[0]}
                        </p>
                      )
                    }
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Input your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      </div>
                      {
                        validation.password && (
                          <p className="text-danger">
                            {validation.password[0]}
                          </p>
                        )
                      }
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Confirm your password" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div className="d-grid gap-2 pt-3">
                    <button type="submit" className="btn btn-registrasi py-2">Registrasi</button>
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