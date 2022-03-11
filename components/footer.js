import { springConfig } from "@/lib/config";
import useAppContext from "@/lib/useAppContext";
import Link from "next/link";
import React from "react";
import { useSpring, animated } from "react-spring";
import QuestionMark from "./svg/questionMark";

const Footer = ({ footer, footercopyright }) => {
  const { appState } = useAppContext();
  const { isBlurred } = appState;
  const animation = useSpring({
    filter: isBlurred ? `blur(3px)` : `blur(0px)`,
    ...springConfig,
  });

  return (
    <animated.div style={animation} className="col-span-full">
      <Link href="/ueber">
        <div className="cursor-pointer my-1">
          <QuestionMark className="w-[1.5rem]" />
        </div>
      </Link>
      <span dangerouslySetInnerHTML={{ __html: footer }} className="block" />
      <span
        dangerouslySetInnerHTML={{ __html: footercopyright }}
        className="block"
      />
    </animated.div>
  );
};

export default Footer;
