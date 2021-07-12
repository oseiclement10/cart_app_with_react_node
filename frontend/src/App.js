import './App.css';
import {BrowserRouter as Router ,Switch ,Route} from 'react-router-dom'
import { HomeScreen } from './components/HomeScreen';
import { ProductScreen } from './components/ProductScreen';
import { CartScreen } from './components/CartScreen';
import { Navbar } from './components/Navbar';
function App() {
  return (
      
     <Router>  
      <Navbar/>
      {/* SideDrawer */}
      {/* BackDrop */}

      <main>
      <Switch>
      <Route exact path ="/" component={HomeScreen}></Route>
      <Route exact path ="/product/:id" component ={ProductScreen}></Route>
      <Route exact path ="/cart" component={CartScreen}></Route>
      </Switch>
      </main>      
    
     </Router>
  );
}

export default App;
