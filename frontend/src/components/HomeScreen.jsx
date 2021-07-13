import './HomeScreen.css';
import Product from './Product';
export const HomeScreen = () => {
    return (
        <div className="homescreen">
         <h2 className="homescreen__title">Latest Products</h2>
         <div className="homescreen__product">
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>   
        </div>
            
        </div>
    )
}
