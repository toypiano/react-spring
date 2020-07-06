import React from 'react';
import { animated, useSprings } from 'react-spring';

// Data points
const items = [0, 1, 2, 3, 4];

const Boxes = () => {
  const springs = useSprings(
    items.length,
    items.map((item) => ({
      // You can still use the "common" API that you used with useSpring.
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
      // you can configure each item separately
      config: {
        tension: item * 170,
        mass: item * 150,
      },
    }))
  );

  return (
    <div className="boxes-grid">
      {springs.map((animation) => (
        <animated.div className="box" style={animation}></animated.div>
      ))}
    </div>
  );
};

export default Boxes;
