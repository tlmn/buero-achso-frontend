import clsx from "clsx";
import Link from "next/link";
import BackIcon from "./svg/back";
import QuestionMark from "./svg/questionMark";
import Footer from "./footer";

const Layout = ({ className, children, linkTo = "ueber", sitemeta }) => (
  <div
    className={clsx(
      className,
      "w-screen min-h-screen py-1 sm:py-2 md:py-3 lg:py-5"
    )}
  >
    <div className="mx-1 sm:mx-3 md:mx-5 lg:mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 relative">
      <div className="absolute right-0 top-0 z-10">
       {/*  <Link href={linkTo}>
          <div className="cursor-pointer hover:blurred">
            {linkTo === "/ueber" ? (
              <QuestionMark className="w-[20px] h-[20px] sm:w-[48px] sm:h-[48px]" />
            ) : (
              <BackIcon className="w-[20px] h-[20px] sm:w-[48px] sm:h-[48px]" />
            )}
          </div>
        </Link> */}
      </div>
      {children}
      {/* <Footer {...sitemeta} /> */}
    </div>
  </div>
);

export default Layout;
