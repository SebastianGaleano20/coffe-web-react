import Header from './components/Header.jsx';
import Info from './components/Info.jsx';
import Footer from './components/Footer.jsx'; 
import CoffeGallery from './components/CoffeGallery.jsx';
import './styles/main.css';

function App() {
  return (
    <>
      <Header />
      <hr />
      <Info />
      <hr />
      <CoffeGallery />
      <hr />
      <Footer />
    </>
  );
}

export default App;
