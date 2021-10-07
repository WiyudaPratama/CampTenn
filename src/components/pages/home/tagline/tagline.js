import "./tagline.css"
import plate from "../../../assets/icon/plate.png"
import payment from "../../../assets/icon/payment-method.png"

const Tagline = () => {
  return (
    <div className="tagline" id="tagline">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-12 col-md-6">
            <div className="left-content text-center">
              <div className="tagline-image">
                <img src={plate} alt="Plate Icon" className="rounded" />
              </div>
              <div className="tagline-description">
                <h3>Makan Sepuasnya</h3>
                <p>Pilih menu makananmu sepuasnya tanpa batasan dan ramah kantongan</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="right-content text-center ">
              <div className="tagline-image">
                <img src={payment} alt="payment Icon" className="rounded" />
              </div>
              <div className="tagline-description">
                <h3>Nikmati Murahnya</h3>
                <p>Rasakan nikmatnya dan rasakan murahnya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tagline