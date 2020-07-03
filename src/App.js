import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import logo from './logo.svg';
import './App.css';

import Toggle from './Toggle';
import Nav from './Nav';
import Checkout from './Checkout';

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0,0,0) scale(1)`
      : // menu will appear from the top-left corner
        `translate3d(-100%,-100%,0) scale(0.6)`,
  });
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
        <Toggle />
        <Checkout isOpen={isNavOpen} />
      </main>
    </animated.div>
  );
};

export default App;
