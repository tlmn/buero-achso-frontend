import useAppContext from "@/lib/useAppContext";
import React from "react"
import { useSpring, animated } from "react-spring";
const Footer = ({ footer, footercopyright }) => {
  const { appState } = useAppContext()
  const { isBlurred } = appState
  const animation = useSpring({ filter: isBlurred ? `blur(3px)` : `blur(0px)`, config: { duration: 100 } })

  return (
    <animated.div
      style={animation}
      className="col-span-full">
      <span dangerouslySetInnerHTML={{ __html: footer }} className="block" />
      <span
        dangerouslySetInnerHTML={{ __html: footercopyright }}
        className="block"
      />
    </animated.div>
  )
};

export default Footer;
