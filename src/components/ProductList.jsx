import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

const categories = {
  'Air Purifiers': [
    { id: 'snake', name: 'Snake Plant', price: 22, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400' },
    { id: 'peace-lily', name: 'Peace Lily', price: 18, image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400' }
  ],
  'Low Maintenance': [
    { id: 'zz', name: 'ZZ Plant', price: 24, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400' },
    { id: 'pothos', name: 'Golden Pothos', price: 16, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400' }
  ],
  'Pet Friendly': [
    { id: 'calathea', name: 'Calathea', price: 28, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400' },
    { id: 'parlor', name: 'Parlor Palm', price: 20, image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=400' }
  ]
};

const ProductList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  return (
    <div className="page container">
      {Object.entries(categories).map(([category, plants]) => (
        <section key={category}>
          <h3>{category}</h3>
          <div className="grid">
            {plants.map((plant) => {
              const added = Boolean(items[plant.id]);
              return (
                <article key={plant.id} className="card">
                  <img src={plant.image} alt={plant.name} />
                  <h4>{plant.name}</h4>
                  <p>${plant.price.toFixed(2)}</p>
                  <button
                    className="btn"
                    disabled={added}
                    onClick={() => dispatch(addToCart(plant))}
                  >
                    {added ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductList;
