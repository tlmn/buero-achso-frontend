import WorksGalleryItem from "@/components/worksGallery/worksGalleryItem";

const WorksGallery = ({ works }) => (
  <div>
    {works.map(
      (item) => item.url !== "undefined" && <WorksGalleryItem workItem={item} />
    )}
  </div>
);

export default WorksGallery;
