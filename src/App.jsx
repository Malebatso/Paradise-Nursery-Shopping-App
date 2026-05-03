import { Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import Header from './components/Header';

const App = () => {
  return (
    <div className="app-shell">
      <Header />
      <main className="background-image">
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
