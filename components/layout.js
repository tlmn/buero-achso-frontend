import clsx from "clsx";

const Layout = ({ className, children }) => (
  <div className={clsx(className, "w-screen min-h-screen py-16")}>
    <div className="mx-16 sm:mx-32 md:mx-48 lg:mx-64 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-16 md:gap-32">
      {children}
    </div>
  </div>
);

export default Layout;
