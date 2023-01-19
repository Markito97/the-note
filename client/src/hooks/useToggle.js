import { useState } from "react";

export function useToggle(initialValue) {
  const [active, setIsActive] = useState(initialValue);

  const handleActive = () => {
    setIsActive(!active);
  };

  return {
    active,
    handleActive,
  };
}
