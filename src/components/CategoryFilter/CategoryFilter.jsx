import React, { useState, useEffect } from 'react';
import { db } from '../../main';
import { collection, getDocs } from 'firebase/firestore';
import { NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';

const CategoryFilter = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  // Función para obtener las categorías desde Firebase
  const fetchCategories = async () => {
    try {
      const categorySnapshot = await getDocs(collection(db, 'categories'));
      const categoriesList = categorySnapshot.docs.map(doc => doc.data().name);
      setCategories(categoriesList);
      setShowCategories(true); // Mostrar categorías después de cargarlas
    } catch (error) {
      console.error('Error al obtener categorías:', error);
    }
  };

  return (
    <div>

      

              
      <NavDropdown onClick={fetchCategories} title="FILTRAR BUSQUEDA" className="filtro" id="basic-nav-dropdown">
    
              
               

              
      {showCategories && (
        <ul>
          {categories[0].map((category, index) => (
            <NavDropdown.Item  key={index} >
                      <Link to={`/cantares-bags/${category}`} className='category'>{category}</Link>
                    </NavDropdown.Item>
          ))}
        </ul>
      )}</NavDropdown> 
    </div>
  );
};

export default CategoryFilter;