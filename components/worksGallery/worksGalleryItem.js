import Link from "next/link";
import Image from "@/components/image";

const WorksGalleryItem = ({ workItem: { id, coverimage } }) => (
  <div>
    {coverimage !== null && (
      <Link href="arbeiten/missy-magazin">
        <div className="cursor-pointer">
          <Image {...coverimage} />
        </div>
      </Link>
    )}
  </div>
);

export default WorksGalleryItem;
