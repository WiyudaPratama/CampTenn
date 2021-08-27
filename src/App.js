import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Navbar from "./components/layouts/navbar/navbar.js"
import Banner from "./components/layouts/banner/banner.js"
import Menu from "./components/layouts/menu/menu.js"
import Tagline from "./components/layouts/tagline/tagline.js"
import Footer from "./components/layouts/footer/footer.js"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Menu />
      <Tagline />
      <Footer />
    </div>
  )
}

export default App;
