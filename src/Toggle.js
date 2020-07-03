import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  // Transition is often used to transition between different components
  // But we're checking if mounting/un-mounting of single component works first
  const transition = useTransition(isToggled, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div>
      {transition.map(
        ({ item, key, props }) =>
          // mount/unmount single-component based on boolean state
          item && (
            <animated.h1 key={key} style={props}>
              Hello
            </animated.h1>
          )
      )}

      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
    </div>
  );
};

// You can also re-name the animated component (not used often)
// const AnimatedTitle = animated(componentName);

export default Toggle;
