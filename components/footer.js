import Link from "next/link";
import React from "react";
import QuestionMark from "./svg/questionMark";

const Footer = ({ footer, footercopyright }) => (
  <div className="col-span-full">
    <Link href="/ueber">
      <div className="cursor-pointer hover:blurred inline-block">
        <QuestionMark className="w-[20px] h-[20px] aspect-ratio" />
      </div>
    </Link>
    <span
      dangerouslySetInnerHTML={{ __html: footer }}
      className="block runningText"
    />
    <span
      dangerouslySetInnerHTML={{ __html: footercopyright }}
      className="block runningText"
    />
  </div>
);

export default Footer;
