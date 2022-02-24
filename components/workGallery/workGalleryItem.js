import Image from "@/components/image";

const GalleryItem = ({ galleryItem }) => (
  <div>
    <Image {...galleryItem} />
  </div>
);

export default GalleryItem;
