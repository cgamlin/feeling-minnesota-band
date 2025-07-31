import './App.css';
import { createContext, useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Media from './components/Media';

export const ActivePageContext = createContext();

function App() {
  const [activePage, setActivePage] = useState('/');

  const renderPage = () => {
    switch (activePage) {
      case '/about':
        return <About />;
      case '/contact':
        return <Contact />;
      case '/media':
        return <Media />;
      default:
        return <Home />;
    }
  };

  return (
    <ActivePageContext.Provider value={{ activePage, setActivePage }}>
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <main>
          {renderPage()}
        </main>
      </div>
    </ActivePageContext.Provider>
  );
}

export default App;
