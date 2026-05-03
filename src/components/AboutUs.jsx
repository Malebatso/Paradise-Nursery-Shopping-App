import { Link } from 'react-router-dom';

const AboutUs = () => (
  <div className="about-us-container">
    <h1>Welcome to Paradise Nursery</h1>
    <p>
      Paradise Nursery is a houseplant company focused on helping people create greener,
      healthier indoor spaces through high-quality, easy-care plants.
    </p>
    <p>
      Our mission is to make plant ownership simple and enjoyable by offering curated plant
      collections, dependable delivery, and guidance that helps every customer grow with confidence.
    </p>
    <Link to="/plants" className="btn primary">Get Started</Link>
  </div>
);

export default AboutUs;
