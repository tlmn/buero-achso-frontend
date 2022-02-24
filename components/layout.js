import clsx from "clsx";

const Layout = ({ className, children }) => (
  <div className={clsx(className, "w-screen min-h-screen")}>
    <div className="container py-16">{children}</div>
  </div>
);

export default Layout;
