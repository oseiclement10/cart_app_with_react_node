import './Navbar.css';
import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            
            <div className="navbar__log">
                <h2>Mern Shopping Cart</h2>
            </div>
            
            <ul className="navbar__links">
                    <li>
                      <Link to = "/cart">
                          <i className="fas fa-shopping-cart"></i>
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
            

           
            <div className="harmburger__menu">
                <div></div>
                <div></div>
                <div></div>
                </div>
        </nav>
    )
}
