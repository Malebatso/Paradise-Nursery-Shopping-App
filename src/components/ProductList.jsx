import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

const categories = {
  'Air Purifiers': [
    { id: 'snake', name: 'Snake Plant', price: 22, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400' },
    { id: 'peace-lily', name: 'Peace Lily', price: 18, image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400' },
    { id: 'areca', name: 'Areca Palm', price: 30, image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400' },
    { id: 'rubber', name: 'Rubber Plant', price: 26, image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400' },
    { id: 'bamboo', name: 'Bamboo Palm', price: 29, image: 'https://images.unsplash.com/photo-1509423350716-97f2360af9e4?w=400' },
    { id: 'aloe', name: 'Aloe Vera', price: 14, image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400' }
  ],
  'Low Maintenance': [
    { id: 'zz', name: 'ZZ Plant', price: 24, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400' },
    { id: 'pothos', name: 'Golden Pothos', price: 16, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400' },
    { id: 'jade', name: 'Jade Plant', price: 19, image: 'https://images.unsplash.com/photo-1616500163248-8fd7d55e64b4?w=400' },
    { id: 'dracaena', name: 'Dracaena', price: 21, image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=400' },
    { id: 'philodendron', name: 'Heartleaf Philodendron', price: 17, image: 'https://images.unsplash.com/photo-1611486212355-d276af4581c0?w=400' },
    { id: 'cast-iron', name: 'Cast Iron Plant', price: 25, image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=400' }
  ],
  'Pet Friendly': [
    { id: 'calathea', name: 'Calathea', price: 28, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400' },
    { id: 'parlor', name: 'Parlor Palm', price: 20, image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=400' },
    { id: 'orchid', name: 'Phalaenopsis Orchid', price: 27, image: 'https://images.unsplash.com/photo-1565011523534-747a8601f76d?w=400' },
    { id: 'boston-fern', name: 'Boston Fern', price: 23, image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400' },
    { id: 'peperomia', name: 'Peperomia', price: 18, image: 'https://images.unsplash.com/photo-1632207691143-643e2f4e92ef?w=400' },
    { id: 'prayer', name: 'Prayer Plant', price: 22, image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=400' }
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
                  <img src={plant.image} alt={plant.name} loading="lazy" />
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
