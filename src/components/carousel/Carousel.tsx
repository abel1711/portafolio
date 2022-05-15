import { logoReact, logoBootstrap, logoCss, logoJavascript, logoNode, logoTypescript } from '../../images/logos';

export const Carousel = () => {

  return (
    <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1500" >
            <div className="carousel-inner ">
              <div className="carousel-item active" data-bs-interval="1500">
                <img src={ logoReact } className="d-block w-100" alt="logo"/>
              </div>
              <div className="carousel-item" data-bs-interval="1500">
                <img src={ logoJavascript } className="d-block w-100" alt="logo"/>
              </div>
              <div className="carousel-item" data-bs-interval="1500">
                <img src={ logoCss } className="d-block w-100" alt="logo"/>
              </div>
              <div className="carousel-item" data-bs-interval="1500">
                <img src={ logoNode } className="d-block w-100" alt="logo"/>
              </div>
              <div className="carousel-item" data-bs-interval="1500">
                <img src={ logoTypescript } className="d-block w-100" alt="logo"/>
              </div>
              <div className="carousel-item" data-bs-interval="1500" >
                <img src={ logoBootstrap } className="d-block w-100" alt="logo"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button  className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
    </div>
  )
}
