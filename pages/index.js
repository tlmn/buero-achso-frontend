import { useEffect, useState } from "react";
import WorksGallery from "@/components/worksGallery/worksGallery";
import { queryKirby } from "@/lib/queryKirby";
import Head from "next/head";
import Layout from "@/components/layout";

const IndexPage = ({ result: { content, claims, works } }) => {
  const [claimID, setClaimID] = useState(0);

  useEffect(() => setClaimID(Math.floor(Math.random() * claims.length)));

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta property="og:title" content={content.title} key="title" />
      </Head>
      <Layout className="bg-neon">
        <div className="col-span-full">
          <h1
            className="text-red-400 text-7xl"
            dangerouslySetInnerHTML={{ __html: content.pagetitle }}
          />
          <h2 dangerouslySetInnerHTML={{ __html: content.subtitle }} />
          <h2
            dangerouslySetInnerHTML={{ __html: claims[claimID].claim }}
            className="text-darkPink"
          />
        </div>
        <WorksGallery works={works} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const data = await queryKirby({
    query: "site",
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
          coverimage: {
            query: "page.content.pageimage.toFile",
            select: {
              url: true,
              width: true,
              height: true,
              alt: true,
              srcset: "file.srcset([300, 800, 1024])"
            },
          },
        },
      },
    },
  });

  return { props: data };
}

export default IndexPage;
