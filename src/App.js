import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import logo from './logo.svg';
import './App.css';

import Checkout from './Checkout';
import Routes from './Routes';

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // You can take the 'to' values out to the top-level
  // and react-spring will understand that it's the 'to' value.
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  // 'from' represents the state before mounting
  // 'to' represents the state after mounting

  return (
    // animated will take the animation out of the react
    // giving performance benefits
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="menu-button"
        >
          Menu
        </button>
        {/* <Nav style={navAnimation} /> */}
      </header>
      <main>
        <Routes />
      </main>
      <Checkout isOpen={isNavOpen} />
    </animated.div>
  );
};

export default App;
