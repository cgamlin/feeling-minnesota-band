import { useContext } from 'react';
import { ActivePageContext } from '../App';
import '../styles/Navigation.css';

export default function Navigation() {
  const { activePage, setActivePage } = useContext(ActivePageContext);

  const handleNavigation = (page) => {
    setActivePage(page);
  };

  return (
    <nav>
      <ul className="navigation-list">
        <li className={activePage === '/' ? 'active' : ''} onClick={() => handleNavigation('/')}>Home</li>
        <li className={activePage === '/media' ? 'active' : ''} onClick={() => handleNavigation('/media')}>Media</li>
        <li className={activePage === '/about' ? 'active' : ''} onClick={() => handleNavigation('/about')}>About</li>
        <li className={activePage === '/contact' ? 'active' : ''} onClick={() => handleNavigation('/contact')}>Contact</li>
      </ul>
    </nav>
  );
}