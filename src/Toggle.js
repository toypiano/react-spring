import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  // useSpring is a basis of all the other hooks in react-spring
  // so if the passed style object works with useSpring, it will work with other hooks

  // Each passed property is wrapped inside Spring
  // and has access to the methods like 'interpolate'
  const { color, y } = useSpring({
    // opacity: isToggled ? 1 : 0,
    color: isToggled ? '#000' : 'green', // can use any values
    y: isToggled ? 0 : -50, // we can re-use this 'y' value in different places
  });

  return (
    <div>
      <animated.h1
        style={{
          color,
          // View interpolation can be a little faster & take up less space
          transform: y.interpolate((y) => `translate3d(0, ${y}px, 0)`),
        }}
      >
        Hello
      </animated.h1>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
    </div>
  );
};

// You can also re-name the animated component (not used often)
// const AnimatedTitle = animated(componentName);

export default Toggle;