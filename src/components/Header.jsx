import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Header = () => {
  const totalItems = useSelector((state) =>
    Object.values(state.cart.items).reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="header">
      <h2>Paradise Nursery</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart" className="cart-link"><FaShoppingCart /> {totalItems}</Link>
      </nav>
    </header>
  );
};

export default Header;
