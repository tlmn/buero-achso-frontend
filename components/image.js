import { default as NextImage } from "next/image";
import clsx from "clsx";

const Image = ({ url, alt, className }) => (
  <div className={clsx(className, "aspect-square relative")}>
    <NextImage
      src={url}
      alt={alt}
      layout="fill"
      objectFit="cover"
    />
  </div>
);

export default Image;
