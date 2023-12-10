import { useState } from "react";

function useApplyTransition(style) {
  const [transition, setTransition] = useState();

  setTimeout(() => {
    setTransition(style);
  }, 10);

  return transition;
}

export default useApplyTransition;
