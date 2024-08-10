

import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import HeaderComponent from './components/HeaderComponent.jsx/HeaderComponent';
import MainComponent from './components/MainComponent/MainComponent';




const App = () => {

  return (
    <div>
      <HeaderComponent/>
      <MainComponent/>
      <FooterComponent />
    </div>

  );
}

export default App