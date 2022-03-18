const Image = ({ url, alt, credits, srcset }) => (
  <img
    src={url}
    srcSet={srcset}
    className="aspect-square w-full object-cover"
    alt={`${alt !== undefined ? alt : ``}${
      credits !== undefined ? ` / ${credits}` : ``
    }`}
  />
);

export default Image;
