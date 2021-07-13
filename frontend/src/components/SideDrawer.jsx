import './SideDrawer.css';
import {Link} from 'react-router-dom';

export const SideDrawer = ({show}) => {
    const sideDrawClass = ["sidedrawer"];
    if(show)sideDrawClass.push("show");
    return (
     <div className={sideDrawClass.join(" ")}>
         <ul className="sidedrawer__links">
            <li>
                <Link to="/cart">
                <i className="fas fa-shopping-cart shift-left"></i>
                <span>
                    Cart
                    <span className="sidedrawer__cartbadge">0</span>
                    </span>
                </Link>
            </li>
            <li className="shopp">
            <Link to="/">
                Shop
                </Link>
                </li>
         </ul>
     </div>
    )
}
