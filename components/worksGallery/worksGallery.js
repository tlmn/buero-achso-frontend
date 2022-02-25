import WorksGalleryItem from "@/components/worksGallery/worksGalleryItem";

const WorksGallery = ({ works }) => (
  <>
    {works.map(
      (item) => item.url !== "undefined" && <WorksGalleryItem workitem={item} />
    )}
  </>
);

export default WorksGallery;
