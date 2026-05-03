import { Routes, Route, useLocation } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import Header from './components/Header';

const App = () => {
  const location = useLocation();
  const showHeader = location.pathname !== '/';

  return (
    <div className={location.pathname === '/' ? 'landing-page' : 'app-shell'}>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  );
};

export default App;
