import './App.css';
import {BrowserRouter as Router ,Switch ,Route} from 'react-router-dom'
import { HomeScreen } from './components/HomeScreen';
import { ProductScreen } from './components/ProductScreen';
import { CartScreen } from './components/CartScreen';
import { Navbar } from './components/Navbar';
import { Backdrop } from './components/Backdrop';
import {useState} from 'react';
import { SideDrawer } from './components/SideDrawer';
function App() {
  
  const [sideToggle,setSideToggle] = useState(false);

  return (
      
     <Router>  
      <Navbar click = {()=>setSideToggle(true)}/>
      <SideDrawer show = {sideToggle}/>
      <Backdrop  show={sideToggle} click = {()=>setSideToggle(false)}/>

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
