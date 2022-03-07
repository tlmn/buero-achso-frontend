import clsx from "clsx";
import Link from "next/link";
import ClosingX from "./svg/closingX";
import QuestionMark from "./svg/questionMark";

const Layout = ({ className, children, linkTo = "ueber" }) => (
  <div className={clsx(className, "w-screen min-h-screen py-16")}>
    <div className="mx-16 sm:mx-32 md:mx-48 lg:mx-64 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 md:gap-32 relative">
      <div className="absolute right-0 top-0 z-10">
        <Link href={linkTo}>
          <div className="cursor-pointer">
            {linkTo === "ueber" ? <QuestionMark /> : <ClosingX />}
          </div>
        </Link>
      </div>
      {children}
    </div>
  </div>
);

export default Layout;
