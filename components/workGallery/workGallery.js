import WorkGalleryItem from "@/components/workGallery/workGalleryItem";

const WorkGallery = ({ gallery }) => (
  <div>
    {gallery.map((item) => (
      <WorkGalleryItem galleryItem={item} />
    ))}
  </div>
);

export default WorkGallery;
