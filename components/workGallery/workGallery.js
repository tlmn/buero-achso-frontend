import WorkGalleryItem from "@/components/workGallery/workGalleryItem";

const WorkGallery = ({ gallery }) => (
  <>
    {gallery.map((item) => (
      <WorkGalleryItem galleryItem={item} />
    ))}
  </>
);

export default WorkGallery;
