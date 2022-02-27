import { useEffect, useState } from "react";
import WorksGallery from "@/components/worksGallery/worksGallery";
import { metaQuery, queryKirby } from "@/lib/queryKirby";
import Layout from "@/components/layout";
import Head from "@/components/head";

const IndexPage = ({
  sitemeta,
  pagemeta,
  pagecontent: { content, claims, works },
}) => {
  const [claimID, setClaimID] = useState(0);

  useEffect(() => setClaimID(Math.floor(Math.random() * claims.length)));

  return (
    <>
      <Head sitemeta={sitemeta} pagemeta={pagemeta} />
      <Layout className="bg-neon" footer={sitemeta}>
        <div className="col-span-full">
          <h1
            className="text-red-400 text-7xl"
            dangerouslySetInnerHTML={{ __html: content.heading }}
          />
          <h2 dangerouslySetInnerHTML={{ __html: content.subline }} />
          <h2
            dangerouslySetInnerHTML={{ __html: claims[claimID].claim }}
            className="text-darkPink py-32"
          />
        </div>
        <WorksGallery works={works} />
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
