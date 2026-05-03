import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/CartSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  const [checkoutMessage, setCheckoutMessage] = useState('');
  const cartItems = Object.values(useSelector((state) => state.cart.items));

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="page container">
      <h3>Shopping Cart</h3>
      <p>Total Plants: {totalItems}</p>
      <p>Total Cost: ${totalCost.toFixed(2)}</p>
      <div className="cart-actions">
        <Link to="/plants" className="btn">Continue Shopping</Link>
        <button className="btn primary" onClick={() => setCheckoutMessage('Checkout is coming soon!')}>
          Checkout
        </button>
      </div>
      {checkoutMessage && <p className="checkout-msg">{checkoutMessage}</p>}
      {cartItems.length === 0 && <p>Your cart is empty. Add some plants to get started.</p>}
      {cartItems.map((item) => (
        <article key={item.id} className="cart-card">
          <img src={item.image} alt={item.name} loading="lazy" />
          <div>
            <h4>{item.name}</h4>
            <p>Unit Price: ${item.price.toFixed(2)}</p>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
          </div>
          <div className="qty-controls">
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            <button className="delete" onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default CartItem;
