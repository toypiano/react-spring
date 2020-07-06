import React from 'react';
// lets you bind richer mouse and touch events to any component or view
import { useGesture } from 'react-with-gesture';
import { animated, useSpring } from 'react-spring';

const Gesture = () => {
  // pass a function to useSpring to return an array with animation and set (and stop)
  const [{ x }, set] = useSpring(() => ({
    x: 0,
    tension: 500,
    friction: 4,
    mass: 30,
  }));

  // destructure only the values we need (down & delta)
  const bind = useGesture(({ down, delta }) => {
    // set animation's xy value as delta(:how far cursor traveled in x and y axis )only when mouse is down
    // set({ x: down ? delta[0] : 0 });

    // You can implement complex logic to interact with gesture
    if (down) {
      set({ x: delta[0] });
    } else {
      // if swiped more than 300px left/right, make it disappear
      if (delta[0] > 300) {
        set({ x: 400 });
      } else if (delta[0] < -300) {
        set({ x: -400 });
      } else {
        set({ x: 0 });
      }
    }
  });

  return (
    <animated.div
      // Call bind returned from useGesture and spread it into animated component
      {...bind()}
      style={{
        // Scale x-delta into opacity
        opacity: x.interpolate({
          map: Math.abs, // map function to process input value
          range: [0, 400], //  x-delta (px)
          output: [1, 0], // opacity
        }),
        // animation.xy passes x and y to interpolate
        transform: x.interpolate((x) => `translate3d(${x}px, 0, 0)`),
      }}
      className="box"
    ></animated.div>
  );
};

export default Gesture;
