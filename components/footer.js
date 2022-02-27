const Footer = ({ footer, footercopyright }) => (
  <div className="col-span-full">
    <span dangerouslySetInnerHTML={{ __html: footer }} className="block" />
    <span
      dangerouslySetInnerHTML={{ __html: footercopyright }}
      className="block"
    />
  </div>
);

export default Footer;
