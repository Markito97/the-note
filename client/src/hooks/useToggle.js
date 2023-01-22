import { useState } from "react";

export function useToggle(initialValue) {
  const [isToggle, setIsActive] = useState(initialValue);

  const setIsToggle = (flag) => setIsActive();

  return {
    isToggle,
    setIsToggle,
  };
}
