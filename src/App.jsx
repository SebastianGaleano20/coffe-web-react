import Header from './components/Header.jsx';
import Info from './components/Info.jsx';
import Footer from './components/Footer.jsx'; 
import CoffeGallery from './components/CoffeGallery.jsx';
import './styles/main.css';

function App() {
  return (
    <div>
      <Header />
      <hr />
      <Info />
      <hr />
      <CoffeGallery />
      <Footer />
    </div>
  );
}

export default App;
