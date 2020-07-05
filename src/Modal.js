import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';

const Modal = ({ closeModal, animation }) => {
  return (
    <div className="modal">
      {/* Transitioned component is wrapped inside animated component to pass down animation object */}
      <animated.div className="modal-card" style={animation}>
        <h1>Modal</h1>
        <button onClick={closeModal}>CLOSE MODAL</button>
      </animated.div>
    </div>
  );
};

/**
 * Transitions Modal component in & out of DOM with animation
 */
const ModalWrapper = () => {
  const [on, setOn] = useState(false);
  // useTransition(item, mapItemToKey, animation)
  const transition = useTransition(on, null, {
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
  });

  // You can pass down pointerEvents to Modal to be able to click buttons underneath
  // const pointerEvents = on ? 'all' : 'none';

  return (
    <div>
      {/* item is 'on' prop */}
      {transition.map(
        ({ item, key, props: animation }) =>
          item && (
            <Modal
              key={key}
              animation={animation}
              closeModal={() => setOn(false)}
            />
          )
      )}
      <button onClick={() => setOn(true)}>OPEN MODAL</button>
    </div>
  );
};

export default ModalWrapper;
