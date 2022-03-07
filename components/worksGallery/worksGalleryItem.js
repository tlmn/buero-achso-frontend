import Link from "next/link";
import Image from "@/components/image";
import useAppContext from "@/lib/useAppContext";
import { useSpring, animated } from "react-spring";

const WorksGalleryItem = ({
  workitem: { coverimage, id: url, content },
  index,
}) => {
  const { appState, setAppState } = useAppContext();

  const { isBlurred, currentItem } = appState;

  const handleMouseAction = () =>
    setAppState((prev) => ({
      ...prev,
      isBlurred: !prev.isBlurred,
      currentItem: index,
    }));

  const imageAnimation = useSpring({
    opacity: isBlurred && currentItem === index ? 0 : 1,
    config: { duration: 300 },
  });

  const circleAnimation = useSpring({
    opacity: isBlurred && currentItem === index ? 1 : 0,
    config: { duration: 300 },
  });

  return (
    <div className="col-span-1" key={index}>
      {coverimage !== null && (
        <Link href={url}>
          <div
            className="cursor-pointer mb-16 sm:mb-0 relative"
            onMouseEnter={() => handleMouseAction()}
            onMouseLeave={() => handleMouseAction()}
            onClick={() => handleMouseAction()}
          >
            <animated.div style={imageAnimation}>
              <Image {...coverimage} />
              <span
                className="runningText sm:hidden"
                dangerouslySetInnerHTML={{ __html: content?.title }}
              />
            </animated.div>
            <animated.div
              style={circleAnimation}
              className="w-full aspect-square absolute top-0 left-0 rounded-full border-2 border-solid border-black flex items-center justify-center"
            >
              <h3
                dangerouslySetInnerHTML={{ __html: content?.title }}
                className="text-center"
              />
            </animated.div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default WorksGalleryItem;
