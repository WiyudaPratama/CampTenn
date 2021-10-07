import React from 'react'
import "./checkout.css"
import Navbar from "../../layouts/navbar/navbar.js"
import Menu from "./menu/menu.js"
import Footer from "../../layouts/footer/footer.js"

const Checkout = () => {
  return (
    <div className="checkout" id="checkout">
      <Navbar />
      <Menu />
      <Footer />
    </div>
  )
}

export default Checkout
