import { default as NextImage } from "next/image";

const Image = ({ url, alt, height, width }) => (
  <div className="aspect-square max-w-xs">
    <NextImage src={url} alt={alt} width={width} height={height} />
  </div>
);

export default Image;
