import Link from "next/link";
import Image from "@/components/image";

const WorksGalleryItem = ({ workitem: { coverimage, id: url, content } }) => (
  <div className="col-span-1">
    {coverimage !== null && (
      <Link href={url}>
        <div className="cursor-pointer mb-16 sm:mb-0">
          <Image {...coverimage} />
          <span
            className="runningText sm:hidden"
            dangerouslySetInnerHTML={{ __html: content?.title }}
          />
        </div>
      </Link>
    )}
  </div>
);

export default WorksGalleryItem;
