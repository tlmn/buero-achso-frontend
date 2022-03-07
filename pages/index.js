import { useEffect, useState } from "react";
import WorksGallery from "@/components/worksGallery/worksGallery";
import { metaQuery, queryKirby } from "@/lib/queryKirby";
import Layout from "@/components/layout";
import Head from "@/components/head";
import Footer from "@/components/footer";
import { Provider as AppContextProvider } from "@/lib/useAppContext";
import { useSpring, animated } from "react-spring";

const IndexPage = ({
  sitemeta,
  pagemeta,
  pagecontent: { content, claims, works },
}) => {
  const [appState, setAppState] = useState({ claimID: 0, isBlurred: false });

  const { claimID, isBlurred } = appState;

  const animation = useSpring({
    filter: isBlurred ? "blur(4px)" : "blur(0px)",
    config: { duration: 80 },
  });

  useEffect(
    () =>
      setAppState((prev) => ({
        ...prev,
        claimID: Math.floor(Math.random() * claims.length),
      })),
    []
  );

  return (
    <AppContextProvider value={{ appState, setAppState }}>
      <Head sitemeta={sitemeta} pagemeta={pagemeta} />
      <Layout className="bg-neon" footer={sitemeta} linkTo="ueber">
        <div className="col-span-full">
          <animated.h1
            style={animation}
            className="text-red-400 text-7xl"
            dangerouslySetInnerHTML={{ __html: content.heading }}
          />
          <animated.h2
            style={animation}
            dangerouslySetInnerHTML={{ __html: content.subline }}
          />
          <animated.h2
            style={animation}
            dangerouslySetInnerHTML={{ __html: claims[claimID].claim }}
            className="text-darkPink py-32"
          />
        </div>
        <WorksGallery works={works} />
        <Footer {...sitemeta} />
      </Layout>
    </AppContextProvider>
  );
};

export async function getStaticProps() {
  const { result } = await queryKirby({
    select: {
      pagecontent: {
        select: {
          content: {
            query: "page('home').content",
          },
          claims: {
            query: "page('home').content.claims.toStructure",
            select: {
              claim: true,
            },
          },
          works: {
            query: "page('arbeiten').children",
            select: {
              id: true,
              content: {
                query: "page.content",
              },
              coverimage: {
                query: "page.content.coverimage.toFile",
                select: {
                  url: true,
                  width: true,
                  height: true,
                  alt: true,
                  srcset: "file.srcset([300, 800, 1024])",
                },
              },
            },
          },
        },
      },
      ...metaQuery("home"),
    },
  });

  return { props: result };
}

export default IndexPage;
