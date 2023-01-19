import { useEffect } from "react";

export function useOutside(ref, handler, flag = true) {
  useEffect(() => {
    if (!flag) return;
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  });
}
