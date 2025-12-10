import { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

import { ActivePageContext } from '../App';
import '../styles/Navigation.css';

export default function Navigation() {
  const { activePage, setActivePage } = useContext(ActivePageContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page) => {
    setActivePage(page);
    setMenuOpen(false); // Close menu on navigation
  };

  const fbLink = "https://www.facebook.com/profile.php?id=61576281586529";
  const ytLink = "https://www.youtube.com/@feelingminnesota_band_mn";

  return (
    <nav className={`${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <ul className={`navigation-list ${menuOpen ? 'open' : ''}`}>
        <li className={activePage === '/' ? 'active' : ''} onClick={() => handleNavigation('/')}>Home</li>
        <li className={activePage === '/about' ? 'active' : ''} onClick={() => handleNavigation('/about')}>About</li>
        <li className={activePage === '/shows' ? 'active' : ''} onClick={() => handleNavigation('/shows')}>Shows</li>
        <li className={activePage === '/media' ? 'active' : ''} onClick={() => handleNavigation('/media')}>Media</li>
        <li className={activePage === '/songs' ? 'active' : ''} onClick={() => handleNavigation('/songs')}>Songs</li>
        <li className={activePage === '/contact' ? 'active' : ''} onClick={() => handleNavigation('/contact')}>Contact</li>
        <a href={fbLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href={ytLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </ul>
    </nav>
  );
}