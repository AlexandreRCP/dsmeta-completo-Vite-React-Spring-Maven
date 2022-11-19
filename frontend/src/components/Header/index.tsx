import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="ADMeta" />
                <h1>ADMeta</h1>
                <p>
                    Desenvolvido por 
                    <a href="https://www.instagram.com/alex.rcp"> @alex.rcp</a>
                </p>
            </div>
        </header>
    )
  }
  
  export default Header;