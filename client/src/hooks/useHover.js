import { useRef } from "react";
import { useEffect, useState } from "react";

export function useHover() {
  const [isHovering, setIsHovering] = useState(false);

  const ref = useRef(null);

  const on = () => setIsHovering(true);
  const off = () => setIsHovering(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", on);
      node.addEventListener("mouseout", off);

      return () => {
        node.removeEventListener("mouseover", on);
        node.removeEventListener("mouseout", off);
      };
    }
  }, [ref.current]);

  return [ref, isHovering];
}
