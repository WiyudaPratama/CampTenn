import React from 'react'
import Navbar from "../../layouts/navbar/navbar.js"
import Banner from "../../layouts/banner/banner.js"
import Menu from "./menu/menu.js"
import Tagline from "./tagline/tagline.js"
import Footer from "../../layouts/footer/footer.js"
import "./home.css"

const Home = () => {
  return (
    <div className="home" id="home">
      <Navbar />
      <Banner />
      <Menu />
      <Tagline />
      <Footer />
    </div>
  )
}

export default Home
