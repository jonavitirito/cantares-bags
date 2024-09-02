
import {BrowserRouter as Router,Routes, Route  } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Category from '../pages/Category/Category';

import NavBar from '../components/HeaderComponent.jsx/NavBar';
import Cart from '../pages/Cart/Cart';
import Checkout from '../pages/Checkout/Chekout';
import Confirmation from '../pages/Confirmation/Confirmation';
import AddProduct from '../pages/AddProduct/AddProduct';


const MainRouter = () => {
 
  return (
    
    <Router>
   <NavBar/>
    <Routes>
    <Route path="/cantares-bags/" element={<Home/>}/>
    <Route path="/cantares-bags/:categoryName" element={<Category/>}/>      
        <Route exact path="/cantares-bags/cart" element={<Cart />}/>
        <Route path="/cantares-bags/checkout" element={<Checkout />} />
        <Route path="/cantares-bags/Confirmation" element={<Confirmation/>} />
        {/* <Route path="/cantares-bags/thank-you" element={<ThankYou />} /> */}
        <Route path='/cantares-bags/add-products' element={<AddProduct/>}> </Route>
    </Routes>
    </Router>
    
  )
}

export default MainRouter; 
