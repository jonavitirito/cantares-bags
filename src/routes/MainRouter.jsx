
import {BrowserRouter as Router,Routes, Route  } from 'react-router-dom';

import ItemDetails from '../pages/ItemDetails/ItemDetails';
import NavBar from '../components/HeaderComponent.jsx/NavBar';
import Home from '../pages/Home/Home';
import Category from '../pages/Category/Category';


const MainRouter = () => {
  return (
    
    <Router>
   <NavBar/>
   
    <Routes>
        <Route path="/cantares-bags" element={<Home/>} />
        <Route path="/cantares-bags/:itemId" element={<ItemDetails/>}/>
        <Route path="/cantares-bags/:category" element={<Category/>}/>
    </Routes>
    </Router>
    
  )
}

export default MainRouter; 
