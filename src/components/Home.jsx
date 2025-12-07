import { useState, useEffect, useRef } from 'react';
import '../styles/Home.css';
import bandLogo from '../assets/band-logo.jpg';
import bandMembers from '../assets/band-members.jpg';

const Footer = () => (
  <footer>
    <p>&copy; 2025 Feeling Minnesota. All rights reserved.</p>
    {/*<div>
      <a href="https://www.facebook.com/profile.php?id=61576281586529">Facebook</a>
      <a href="https://www.youtube.com/@feelingminnesota_band_mn">YouTube</a>
      <a href="#">Instagram</a>
      <a href="#">Twitter</a>
    </div>*/}
  </footer>
);


export default function Home() {
  const images = [
    bandMembers,
    bandLogo,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const updateContainerHeight = () => {
      const activeImage = containerRef.current.querySelector('.responsive-img.active');
      if (activeImage) {
        containerRef.current.style.height = `${activeImage.offsetHeight}px`;
      }
    };

    updateContainerHeight();
    window.addEventListener('resize', updateContainerHeight);

    return () => window.removeEventListener('resize', updateContainerHeight);
  }, [currentImageIndex]);

  return (
    <div className="home">
      <div className="band-header">
        <img src={bandLogo} className="band-logo" alt="band logo" />
        <h1 className="band-name">Feeling Minnesota</h1>
      </div>
      <div className="carousel-container" ref={containerRef}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`responsive-img ${index === currentImageIndex ? 'active' : ''}`}
            alt={`carousel ${index}`}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
