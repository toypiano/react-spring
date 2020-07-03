import React, { Component } from 'react';
import { useSpring, animated } from 'react-spring';
import logo from './logo.svg';
import './App.css';

const App = () => {
  // You can take the 'to' values out to the top-level
  // and react-spring will understand that it's the 'to' value.
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  return (
    // animated will take the animation out of the react
    // giving performance benefits
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <button className="menu-button">Menu</button>
      </header>
    </animated.div>
  );
};

export default App;
