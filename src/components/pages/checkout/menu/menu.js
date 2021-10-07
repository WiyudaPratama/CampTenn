import React from 'react'
import { Link } from "react-router-dom"
import "./menu.css"
import Burger from "../../../assets/image/burger.jpg"
import Stars from "../../../assets/icon/stars.png"

const Menu = () => {
  return (
    <div className="menu" id="menu">
      
      {/* Breadcrumb */}
      <div className="container">
        <div className="row mt-4">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">Checkout</li>
                <li className="breadcrumb-item active">Burger</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Detail Menu */}
      <div className="detail-menu" id="detail-menu">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="detail-image">
                <img src={Burger} alt="Burger" className="rounded" />
              </div>
              <div className="detail-title">
                <h5>Burger</h5>
                <p>Rp. 10000</p>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="detail-order">
                <form>
                  <div className="mb-3 row">
                    <label htmlFor="alamat" className="col-md-3 col-form-label">Alamat</label>
                    <div className="col-md-9">
                      <textarea className="form-control" id="alamat" rows="3"></textarea>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="qty" className="col-md-3 col-form-label">Kuantitas</label>
                    <div className="col-md-3">
                      <input type="number" name="qty" className="form-control" id="qty"  />
                    </div>
                    <label htmlFor="ongkir" className="col-md-2 col-form-label">Ongkir</label>
                    <div className="col-md-4">
                      <div className="input-group">
                        <span className="input-group-text" id="ongkir">Rp</span>
                        <input type="number" className="form-control" id="ongkir" value="2000" readOnly />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="totalHarga" className="col-lg-3 col-12 col-form-label">Total</label>
                    <div className="col-lg-4 col-12">
                      <div className="input-group">
                        <span className="input-group-text" id="totalHarga">Rp</span>
                        <input type="number" className="form-control" id="totalHarga" readOnly />
                      </div>
                    </div>
                    <label htmlFor="metodebayar" className="col-lg-2 col-12 col-form-label">Metode Pembayaran</label>
                    <div className="col-lg-3 col-12">
                      <select className="form-select">
                        <option defaultValue>Choose</option>
                        <option value="OVO">OVO</option>
                        <option value="Dana">Dana</option>
                        <option value="Gopay">Gopay</option>
                        <option value="COD">COD</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-grid gap-2">
                    <button className="btn btn-checkout" type="button">Checkout</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profil */}
      <div className="profil" id="profil">
        <div className="container">
          <div className="row mt-3">
            <div className="col">
              <div className="card shadow p-2">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-lg-4">
                      <h3>Burger Kami</h3>
                      <button type="button" className="btn btn-chat py-2 ps-4 pe-4">Chat Penjual</button>
                    </div>
                    <div className="col-12 col-lg-3">
                      <p>Penilaian : 170</p>
                      <p>Produk : 7</p>
                    </div>
                    <div className="col-12 col-lg-5">
                      <p>Rating :  <img src={Stars} alt="Stars" /></p>
                      <p>Alamat : Jln. Sisingamangaraja, Gg.Sepakat</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Menu
