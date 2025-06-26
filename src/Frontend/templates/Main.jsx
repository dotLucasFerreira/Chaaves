import First from '../../images/Bag__Boho_azul00.jpg'
import Second from '../../images/Bag__Boho_laranja00.jpg'
import Third from '../../images/Bag__Mondrian_star02.jpg'
import '../css/Main.css'

function Main() {
    return (
       <div className="Maincontent d-flex justify-content-center text-center  shadow-sm ">
  <div
    id="carouselExampleIndicators"
    className="carousel slide carousel-fade w-100"
    data-ride="carousel"
  >
    {/* Indicadores */}
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>

    {/* Imagens */}
    <div className="carousel-inner custom-carousel">
      <div className="carousel-item active">
        <img src={First} className="d-block w-100 " alt="First" />
      </div>
      <div className="carousel-item">
        <img src={Second} className="d-block w-100 " alt="Second" />
      </div>
      <div className="carousel-item">
        <img src={Third} className="d-block w-100" alt="Third" />
      </div>
    </div>

    {/* Controles */}
    <a
      className="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
    )
}

export default Main;



