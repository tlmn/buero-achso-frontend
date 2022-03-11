import { useEffect, useState } from "react";
import WorksGallery from "@/components/worksGallery/worksGallery";
import { metaQuery, queryKirby } from "@/lib/queryKirby";
import Layout from "@/components/layout";
import Head from "@/components/head";
import Footer from "@/components/footer";
import useAppContext from "@/lib/useAppContext";
import { useSpring, animated } from "react-spring";
import { springConfig } from "@/lib/config";

const IndexPage = ({
  sitemeta,
  pagemeta,
  pagecontent: { content, claims, works },
}) => {
  const { appState, setAppState } = useAppContext();
  const { claimID, isBlurred } = appState;

  const animation = useSpring({
    filter: isBlurred ? "blur(3px)" : "blur(0px)",
    ...springConfig,
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
    <>
      <Head sitemeta={sitemeta} pagemeta={pagemeta} />
      <Layout className="bg-neon" footer={sitemeta} linkTo="/ueber">
        <div className="col-span-full">
          <animated.h1
            style={animation}
            className="text-red-400"
            dangerouslySetInnerHTML={{ __html: content.heading }}
          />
          <animated.h2
            style={animation}
            dangerouslySetInnerHTML={{ __html: content.subline }}
          />
          <h2
            dangerouslySetInnerHTML={{ __html: claims[claimID].claim }}
            className="text-darkPink py-32"
          />
        </div>
        <WorksGallery works={works} />
        <Footer {...sitemeta} />
      </Layout>
    </>
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
                  credits: true,
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
