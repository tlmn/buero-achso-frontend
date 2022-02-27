const Image = ({ url, alt, srcset }) => (
  <img
    src={url}
    srcSet={srcset}
    className="aspect-square w-full object-cover"
    alt={alt}
  />
);

export default Image;
