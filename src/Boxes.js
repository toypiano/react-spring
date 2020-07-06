import React, { useState, useRef } from 'react';
import { animated, useSpring, useChain, useTransition } from 'react-spring';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Boxes = () => {
  const [on, setOn] = useState(false);

  const springRef = useRef();

  const { size } = useSpring({
    ref: springRef, // Add ref property for chaining
    from: {
      size: '20%',
    },
    to: {
      size: on ? '100%' : '20%',
    },
  });

  const transitionRef = useRef();

  // When you want to stagger your animation
  // const trail = useTrail(5, {
  //   ref: transitionRef,
  //   from: {
  //     opacity: 0,
  //     transform: 'scale(0)',
  //   },
  //   to: {
  //     opacity: on ? 1 : 0,
  //     transform: on ? 'scale(1)' : 'scale(0.3)',
  //   },
  // });

  // When you want to mount/unmount the animating components
  const transition = useTransition(on ? items : [], (item) => item, {
    ref: transitionRef,
    // You can set trail inside useTransition!
    trail: 400 / items.length, // total animation duration = 400
    from: {
      opacity: 0,
      transform: 'scale(0)',
    },
    enter: {
      opacity: 1,
      transform: on ? 'scale(1)' : 'scale(0.3)',
    },
    leave: {
      opacity: 0,
      transform: 'scale(0)',
    },
  });

  // Chain the multiple animations by passing an array of refs
  useChain(on ? [springRef, transitionRef] : [transitionRef, springRef]);

  return (
    <div className="full-height">
      <animated.div
        style={{ width: size, height: size }}
        className="boxes-grid-two"
        onClick={() => setOn(!on)}
      >
        {/* {trail.map((animation) => (
          <animated.div className="box-two" style={animation}></animated.div>
        ))} */}
        {transition.map(({ item, key, props: animation }) => (
          <animated.div
            className="box-two"
            key={key}
            style={animation}
          ></animated.div>
        ))}
      </animated.div>
    </div>
  );
};

export default Boxes;
