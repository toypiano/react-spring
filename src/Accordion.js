import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import useMeasure from './useMeasure';

const Accordion = () => {
  const [on, setOn] = useState(false);
  const [bind, { height, top }] = useMeasure();

  const animation = useSpring({
    // We're measuring the content of the accordion(<p>)
    // , so we need to include the padding-top + bottom to get the height
    to: [
      {
        height: on ? height + top * 2 : 0,
        overflow: 'hidden',
      },
    ],
  });

  useEffect(() => {}, []);

  return (
    <div>
      <h1>
        <button onClick={() => setOn(!on)}>Toggle</button>
      </h1>

      {/* Spread ref inside an object */}
      {/* If you animate the bound element, you'll get an infinite loop */}
      <animated.div style={animation}>
        <div className="accordion" {...bind}>
          <p>Hello, I'm in the accordion</p>
        </div>
      </animated.div>
    </div>
  );
};

export default Accordion;
