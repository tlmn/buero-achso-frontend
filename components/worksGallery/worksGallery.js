import WorksGalleryItem from "@/components/worksGallery/worksGalleryItem";

const WorksGallery = ({ works }) => (
  <>
    {works.map(
      (item) => item.url !== "undefined" && <WorksGalleryItem workItem={item} />
    )}
  </>
);

export default WorksGallery;
