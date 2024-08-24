import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MainLayout.css"
import FooterComponent from '../components/FooterComponent/FooterComponent';





const MainLayout = ({children}) => {

  return ( 
    <div>
    
     <main className='main'>  
       
{children}

     </main>
      <FooterComponent />
      </div>
  )
}

export default MainLayout