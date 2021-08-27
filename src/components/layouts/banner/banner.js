import "./banner.css"
import banner from "../../assets/image/banner.jpg"

const Banner = () => {
  return (
    <div className="banner" id="banner">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="left-content">
              <h1>
                Cheap And Friendly Food, 
                <br/>
                Only In The Canteen Campus
              </h1>
              <p>
                With us enjoy cheap, and delicious meals of course
              </p>
              <div className="btn-menu">
                <a href="" className="btn btn-menu-decide">Decide a Menu</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="right-content">
              <img src={banner} className="mx-auto d-block" alt="Banner"></img>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Banner