import Image from "@/components/image";

const GalleryItem = ({ galleryItem }) => (
    <div className="col-span-1">
        <Image {...galleryItem} />
    </div>
);

export default GalleryItem;
