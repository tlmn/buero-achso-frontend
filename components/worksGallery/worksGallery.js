import WorksGalleryItem from "@/components/worksGallery/worksGalleryItem";

const WorksGallery = ({ works }) => (
  <>
    {works?.map(
      (item, index) =>
        item.url !== "undefined" && (
          <WorksGalleryItem workitem={item} index={index} />
        )
    )}
  </>
);

export default WorksGallery;
