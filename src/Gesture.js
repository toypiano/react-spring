import React from 'react';
// lets you bind richer mouse and touch events to any component or view
import { useGesture } from 'react-with-gesture';
import { animated, useSpring, config } from 'react-spring';

const Gesture = () => {
  // pass a function to useSpring to return an array with animation and set (and stop)
  const [{ xy }, set] = useSpring(() => ({
    xy: [0, 0],
    config: config.stiff,
  }));

  // destructure only the values we need (down & delta)
  const bind = useGesture(({ down, delta }) => {
    // set animation's xy value as delta(:how far cursor traveled in x and y axis )only when mouse is down
    set({ xy: down ? delta : [0, 0] });
  });

  return (
    <animated.div
      // Call bind returned from useGesture and spread it into animated component
      {...bind()}
      style={{
        // animation.xy passes x and y to interpolate
        transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`),
      }}
      className="box"
    ></animated.div>
  );
};

export default Gesture;
