import '../css/Header.css';
import logo from '../../images/Chaavesiconwhite.png';
import Menu from '../templates/Menu';

function Header() {
    return (
        <>
            <header className="site-header py-1">
                <div className="container d-grid align-items-center">
                    <div className="logo d-flex justify-content-center">
                        <a href="#">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;