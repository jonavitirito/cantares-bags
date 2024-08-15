

import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './Layout/MainLayout';
import Home from './pages/Home/Home';


// import ButtonComponent from './components/ButtonComponent/ButtonComponent';
// import FooterComponent from './components/FooterComponent/FooterComponent';
// import HeaderComponent from './components/HeaderComponent.jsx/HeaderComponent';
// import MainComponent from './components/MainComponent/MainComponent';


const App = () => {

  return (
    <MainLayout>
<Home/>
    </MainLayout>
    
  );
}

export default App