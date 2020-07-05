import { useState, useRef, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export default function useMeasure() {
  const ref = useRef();
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  const [ro] = useState(
    /*
   ResizeObserveEntry
    contentRect: DOMRectReadOnly
      top: 0
      right: 610
      bottom: 266
      left: 0
      width: 610
      height: 266
      x: 0
      y: 0
    target: div#most-visited
    __proto: ResizeObserverEntry
   */
    () => new ResizeObserver(([entry]) => setBounds(entry.contentRect))
  );
  useEffect(() => {
    ro.observe(ref.current);
    return ro.disconnect; // cleanup on unmount
  }, []);

  // One-liner with comma operator
  // useEffect(() => ro.observe(ref.current), ro.disconnect), [])

  // Wrap ref inside an object so that we can spread them into elements
  return [{ ref }, bounds];
}
