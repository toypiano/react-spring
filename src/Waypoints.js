import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated, config } from 'react-spring';
import { lorem } from 'faker';

const Slider = ({ children }) => {
  const [on, setOn] = useState(false);
  const animation = useSpring({
    opacity: on ? 1 : 0.2,
    transform: on ? `translate3d(0,0,0)` : `translate3d(50%,0,0)`,
    config: config.slow,
  });
  return (
    <Waypoint
      onEnter={() => !on && setOn(true)}
      onLeave={() => on && setOn(false)}
      bottomOffset="30%"
    >
      <animated.p style={animation}>{children}</animated.p>
    </Waypoint>
  );
};

const Waypoints = () => {
  return (
    <div className="waypoints">
      {[...Array(5)].map((v, i) => (
        <Slider key={i}>{lorem.words(50)}</Slider>
      ))}
    </div>
  );
};

export default Waypoints;
