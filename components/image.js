import { default as NextImage } from "next/image";
import clsx from "clsx";

const Image = ({ url, alt, height, width, className }) => (
  <div className={clsx(className, "aspect-square relative")}>
    <NextImage
      src={url}
      alt={alt}
      width={width}
      height={height}
      layout="fill"
      objectFit="cover"
    />
  </div>
);

export default Image;
