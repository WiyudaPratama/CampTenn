import React from "react"
import { Link } from "react-router-dom"
import "./menu.css"
import search from "../../../assets/icon/search.png"
import burger from "../../../assets/image/burger.jpg"
import chocolate from "../../../assets/image/chocolate.jpg"
import coffee from "../../../assets/image/coffee.jpg"
import salad from "../../../assets/image/salad.jpg"
import stars from "../../../assets/icon/stars.png"

const Menu = () => {
  return (
    <div className="menu" id="menu">

      {/* Kategori */}
      <div className="category" id="category">
        <div className="container">
          <div className="row mt-5 mb-3 text-center">
            <div className="col-12">
              <div className="category-title">
                <h2 className="ps-md-2 pe-md-2">Pilih Menu Yang Kamu Suka</h2>
              </div>
              <div className="category-menu">
                <Link to="#" className="ps-md-2 pe-md-2 ps-3 menu-option active">Semua</Link>
                <Link to="#" className="ps-md-2 pe-md-2 ps-3 menu-option">Makanan</Link>
                <Link to="#" className="ps-md-2 pe-md-2 ps-3 menu-option">Minuman</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Menu */}
      <div className="search-menu" id="search-menu">
        <div className="container">
          <div className="row mb-3 text-center">
            <div className="col-12">
              <form>
                <div className="input-group">
                  <span className="input-group-text" id="search-menu">
                    <img src={search} className="w-75 mx-auto" alt="Serach Icon"></img>
                  </span>
                  <input type="text" name="search-menu" className="form-control" placeholder="Cari menu" autoFocus="search-menu" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Menu All */}
      <div className="menu-all" id="menu-all">
        <div className="container">
          <div className="row pt-4 text-center">
            <div className="col-12 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-header p-0">
                  <Link to="/checkout">
                    <div className="menu-picture">
                      <div className="zoom rounded">
                        <div className="box">
                          <img src={burger} className="rounded card-img-top" alt="Img Menu" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="card-body">
                  <div className="menu-description">
                    <h5>Burger</h5>
                    <p>Burger Modern</p>
                    <div className="rating">
                      <img src={stars} alt="Rating Menu" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-header p-0">
                  <Link to="#">
                    <div className="menu-picture">
                      <div className="zoom rounded">
                        <div className="box">
                          <img src={salad} className="rounded card-img-top" alt="Img Menu" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="card-body">
                  <div className="menu-description">
                    <h5>Salad</h5>
                    <p>Aneka Salad</p>
                    <div className="rating">
                      <img src={stars} alt="Rating Menu" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-header p-0">
                  <Link to="#">
                    <div className="menu-picture">
                      <div className="zoom rounded">
                        <div className="box">
                          <img src={chocolate} className="rounded card-img-top" alt="Img Menu" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="card-body">
                  <div className="menu-description">
                    <h5>Chocolate</h5>
                    <p>Coffee Modern</p>
                    <div className="rating">
                      <img src={stars} alt="Rating Menu" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-header p-0">
                  <Link to="#">
                    <div className="menu-picture">
                      <div className="zoom rounded">
                        <div className="box">
                          <img src={coffee} className="rounded card-img-top" alt="Img Menu" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="card-body">
                  <div className="menu-description">
                    <h5>Coffee</h5>
                    <p>Coffee Modern</p>
                    <div className="rating">
                      <img src={stars} alt="Rating Menu" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-4 text-center">
            <div className="col-12 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-header p-0">
                  <Link to="#">
                    <div className="menu-picture">
                      <div className="zoom rounded">
                        <div className="box">
                          <img src={burger} className="rounded card-img-top" alt="Img Menu" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="card-body">
                  <div className="menu-description">
                    <h5>Burger</h5>
                    <p>Burger Modern</p>
                    <div className="rating">
                      <img src={stars} alt="Rating Menu" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-header p-0">
                  <Link to="#">
                    <div className="menu-picture">
                      <div className="zoom rounded">
                        <div className="box">
                          <img src={salad} className="rounded card-img-top" alt="Img Menu" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="card-body">
                  <div className="menu-description">
                    <h5>Salad</h5>
                    <p>Aneka Salad</p>
                    <div className="rating">
                      <img src={stars} alt="Rating Menu" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-header p-0">
                  <Link to="#">
                    <div className="menu-picture">
                      <div className="zoom rounded">
                        <div className="box">
                          <img src={chocolate} className="rounded card-img-top" alt="Img Menu" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="card-body">
                  <div className="menu-description">
                    <h5>Chocolate</h5>
                    <p>Coffee Modern</p>
                    <div className="rating">
                      <img src={stars} alt="Rating Menu" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-header p-0">
                  <Link to="#">
                    <div className="menu-picture">
                      <div className="zoom rounded">
                        <div className="box">
                          <img src={coffee} className="rounded card-img-top" alt="Img Menu" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="card-body">
                  <div className="menu-description">
                    <h5>Coffee</h5>
                    <p>Coffee Modern</p>
                    <div className="rating">
                      <img src={stars} alt="Rating Menu" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-2 pb-5 text-center">
            <div className="col-12">
              <Link to="#" className="btn btn-load-more">LOAD MORE</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Menu