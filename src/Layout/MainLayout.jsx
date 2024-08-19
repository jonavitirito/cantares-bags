import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MainLayout.css"
import FooterComponent from '../components/FooterComponent/FooterComponent';
import HeaderComponent from '../components/HeaderComponent.jsx/HeaderComponent';


const MainLayout = ({children}) => {
  return ( 
    <div>
    <HeaderComponent/>
     <main className='main'>      
{children}

     </main>
      <FooterComponent />
      </div>
  )
}

export default MainLayout