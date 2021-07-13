import './Navbar.css';
import {Link} from 'react-router-dom';

export const Navbar = ({click}) => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h2>MERN Shopping Cart</h2>
            </div>
            
            <ul className="navbar__links">
                    <li className="cartlogo__circle">
                      <Link to = "/cart">
                          <i className="fas fa-shopping-cart icon"></i>
                      Cart
                      <span className="cartlogo__badge">0</span>
                      </Link>
                    </li>
                    <li>
                      <Link to = "/">
                      Shop                      
                      </Link>
                    </li>
            </ul>
            

           
            <div className="harmburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
                </div>
        </nav>
    )
}
