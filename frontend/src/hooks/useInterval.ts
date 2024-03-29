/* eslint-disable */
import  { useEffect, useRef } from 'react';

export function useInterval(callback: any, delay: number|null): void {
  const savedCallback: {current: any} = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}