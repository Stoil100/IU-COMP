import React from "react";
import { useSpring, animated } from "@react-spring/web";

interface Props {
  direction: string;
  onLoad?: () => void;
  delay: number;
}

const Reveal = ({
  children,
  direction,
  onLoad,
  delay,
}: React.PropsWithChildren<Props>) => {
  const props = useSpring({
    from: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    },
    to: { opacity: 1, x: 0, y: 0 },
    reset: false,
    delay: delay*1000,
    onRest() {
        onLoad!();
    },
  });
  return (
    <animated.div style={props}>
      {children}
    </animated.div>
  );
};

export default Reveal;