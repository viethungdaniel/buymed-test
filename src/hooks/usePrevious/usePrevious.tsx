import _isEqual from "lodash/isEqual";

import { useRef } from "react";

const usePrevious = <V extends any>(value: V) => {
  const currentRef = useRef(value);
  const previousRef = useRef<V>();
  if (!_isEqual(currentRef.current, value)) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  }
  return previousRef.current;
};

export default usePrevious;
