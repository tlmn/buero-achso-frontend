import { springConfig } from "@/lib/config";
import useAppContext from "@/lib/useAppContext";
import Link from "next/link";
import React from "react";
import QuestionMark from "./svg/questionMark";

const Footer = ({ footer, footercopyright }) => (
  <div className="col-span-full">
    <Link href="/ueber">
      <div className="cursor-pointer my-1 hover:blurred inline-block">
        <QuestionMark className="w-[20px] sm:w-[40px]" />
      </div>
    </Link>
    <span
      dangerouslySetInnerHTML={{ __html: footer }}
      className="block hover:blurred"
    />
    <span
      dangerouslySetInnerHTML={{ __html: footercopyright }}
      className="block hover:blurred"
    />
  </div>
);

export default Footer;
