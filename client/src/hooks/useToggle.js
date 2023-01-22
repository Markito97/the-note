import { useState } from "react";

export function useToggle(initialValue) {
  const [isToggle, setIsActive] = useState(initialValue);

  const setIsToggle = () => setIsActive(active);

  return {
    isToggle,
    setIsToggle,
  };
}
