import Content from '../../images/Bolacha__Brown00.jpg'
import '../css/Nav.css'

function Nav() {
    return (
        <nav className="nav1 ">
            <hr className="my-4"/>
            <div class="nav1_content d-grid align-content-center overflow-hidden">
                <div class="my-3 p-3 d-flex flex-column justify-content-center">
                    <h2 class="display-5">Conheça a linha de produtos</h2>
                    <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                </div>
                <img class="card-img" src={Content} alt="Card image"/>
            </div>

           <hr className="my-4"/>
            <div class="nav1_content d-grid align-content-center overflow-hidden">
                <img class="card-img" src={Content} alt="Card image"/>
                <div class="my-3 p-3 d-flex flex-column justify-content-center">
                    <h2 class="display-5">Conheça a linha de produtos</h2>
                    <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                </div>
                
            </div>
              <hr className="my-4"/>
            <div class="nav1_content d-grid align-content-center overflow-hidden">
                <img class="card-img" src={Content} alt="Card image"/>
            </div>
        </nav>

    )
}

export default Nav;