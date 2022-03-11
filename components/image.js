const Image = ({ url, alt, credits, srcset }) => (
  <img
    src={url}
    srcSet={srcset}
    className="aspect-square w-full object-cover"
    alt={`${alt}${credits !== "" ? ` / ${credits}` : ``}`}
  />
);

export default Image;
