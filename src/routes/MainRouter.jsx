
import {BrowserRouter as Router,Routes, Route  } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Category from '../pages/Category/Category';

import NavBar from '../components/HeaderComponent.jsx/NavBar';
import Cart from '../pages/Cart/Cart';


const MainRouter = () => {
 
  return (
    
    <Router>
   <NavBar/>
    <Routes><Route path="/cantares-bags/" element={<Home/>}/>
    <Route path="/cantares-bags/:categoryName" element={<Category/>}/>      
        <Route exact path="/cantares-bags/cart" element={<Cart />}/>
    </Routes>
    </Router>
    
  )
}

export default MainRouter; 
