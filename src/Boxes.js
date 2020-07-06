import React, { useState } from 'react';
import { animated, useSprings, useTrail } from 'react-spring';

const Boxes = () => {
  const [on, setOn] = useState(false);

  // When you want to stagger your animation
  const trail = useTrail(5, {
    opacity: on ? 0 : 1,
    transform: on ? 'scale(0.3)' : 'scale(1)',
  });

  return (
    <div className="boxes-grid">
      <button onClick={() => setOn(!on)}>TOGGLE</button>
      {trail.map((animation) => (
        <animated.div className="box" style={animation}></animated.div>
      ))}
    </div>
  );
};

export default Boxes;
