import React from 'react'
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
                  <li><a href="#">Burger</a></li>
                  <li><a href="#">Ayam Geprek</a></li>
                  <li><a href="#">Bakso</a></li>
                  <li><a href="#">Nasi Padang</a></li>
                </ul>
              </div>
              <div className="footer-title mt-3">
                <h5>Support Kami</h5>
              </div>
              <div className="list-title">
                <ul className="list-unstyled">
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Twiter</a></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="footer-title">
                <h5>Minuman Favorit</h5>
              </div>
              <div className="list-title">
                <ul className="list-unstyled">
                  <li><a href="#">Coffee Blend</a></li>
                  <li><a href="#">Jus</a></li>
                  <li><a href="#">Sof Buah</a></li>
                  <li><a href="#">Boba</a></li>
                </ul>
              </div>
              <div className="footer-title mt-3">
                <h5>Hubungi Kami</h5>
              </div>
              <div className="list-title">
                <ul className="list-unstyled">
                  <li><a href="#">021-678-0921</a></li>
                  <li><a href="#">camptenn@gmail.com</a></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="footer-title">
                <h5>Bantuan</h5>
              </div>
              <div className="list-title">
                <ul className="list-unstyled">
                  <li><a href="#">Bantuan</a></li>
                  <li><a href="#">Yuk Jadi Mitra Kami</a></li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div class="row text-center pt-4 pb-4">
            <div class="col-12 text-muted">
              <p>All Rights Reserved CampTeen by WiyudaPratama 2021</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
