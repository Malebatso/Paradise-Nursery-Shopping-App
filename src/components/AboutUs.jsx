import { Link } from 'react-router-dom';

const AboutUs = () => (
  <section className="landing-overlay">
    <h1>Paradise Nursery</h1>
    <p>
      Paradise Nursery curates healthy, hand-picked houseplants that make indoor spaces
      greener, cleaner, and more relaxing. From beginner-friendly plants to statement
      foliage, we help you grow your own slice of paradise at home.
    </p>
    <Link to="/plants" className="btn primary">Get Started</Link>
  </section>
);

export default AboutUs;
