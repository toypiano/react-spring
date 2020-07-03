import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const Toggle = () => {
  const [items, setItems] = useState([
    {
      letter: 'H',
      key: 1,
    },
    {
      letter: 'E',
      key: 2,
    },
    {
      letter: 'L',
      key: 3,
    },
    {
      letter: 'L',
      key: 4,
    },
    {
      letter: 'O',
      key: 5,
    },
  ]);
  // Transition is often used to transition between different components
  // But we're checking if mounting/un-mounting of single component works first
  const transition = useTransition(
    items /* item(s) to transition */,
    (item) => item.key /* specify field that has the key value */,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    }
  );

  return (
    <div>
      {transition.map(({ item, key, props }) => (
        // mount/unmount single-component based on boolean state
        <animated.h1 style={props} key={key}>
          {item.letter}
        </animated.h1>
      ))}

      <button
        onClick={() =>
          setItems([
            {
              letter: 'H',
              key: 1,
            },
          ])
        }
      >
        Toggle
      </button>
    </div>
  );
};

// You can also re-name the animated component (not used often)
// const AnimatedTitle = animated(componentName);

export default Toggle;
