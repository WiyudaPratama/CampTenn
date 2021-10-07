import React from 'react'
import { Link } from "react-router-dom"
import "./footer.css"
import logo from "../../assets/image/logo.png"

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <footer>
        <div className="container">
          <div className="row pt-4 pb-4">
            <div className="col-12 col-md-3 d-flex align-items-center">
              <div className="row">
                <div className="col-12">
                  <div className="logo my-4">
                    <img src={logo} alt="logo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="footer-title">
                <h5>Makan Favorit</h5>
              </div>
              <div className="list-title">
                <ul className="list-unstyled">
                  <li><Link to="#">Burger</Link></li>
                  <li><Link to="#">Ayam Geprek</Link></li>
                  <li><Link to="#">Bakso</Link></li>
                  <li><Link to="#">Nasi Padang</Link></li>
                </ul>
              </div>
              <div className="footer-title mt-3">
                <h5>Support Kami</h5>
              </div>
              <div className="list-title">
                <ul className="list-unstyled">
                  <li><Link to="#">Facebook</Link></li>
                  <li><Link to="#">Instagram</Link></li>
                  <li><Link to="#">Twiter</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="footer-title">
                <h5>Minuman Favorit</h5>
              </div>
              <div className="list-title">
                <ul className="list-unstyled">
                  <li><Link to="#">Coffee Blend</Link></li>
                  <li><Link to="#">Jus</Link></li>
                  <li><Link to="#">Sof Buah</Link></li>
                  <li><Link to="#">Boba</Link></li>
                </ul>
              </div>
              <div className="footer-title mt-3">
                <h5>Hubungi Kami</h5>
              </div>
              <div className="list-title">
                <ul className="list-unstyled">
                  <li><Link to="#">021-678-0921</Link></li>
                  <li><Link to="#">camptenn@gmail.com</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="footer-title">
                <h5>Bantuan</h5>
              </div>
              <div className="list-title">
                <ul className="list-unstyled">
                  <li><Link to="#">Bantuan</Link></li>
                  <li><Link to="#">Yuk Jadi Mitra Kami</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="row text-center pt-4 pb-4">
            <div className="col-12 text-muted">
              <p>All Rights Reserved CampTeen by WiyudaPratama 2021</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
