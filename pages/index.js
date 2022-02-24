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
      <Layout className="bg-darkPink">
        <div className="container grid grid-cols-2">
          <div className="col-span-1">
            <h1
              className="text-red-400 text-7xl"
              dangerouslySetInnerHTML={{ __html: content.pagetitle }}
            />
            <h2 dangerouslySetInnerHTML={{ __html: content.subtitle }} />
            <h2 dangerouslySetInnerHTML={{ __html: claims[claimID].claim }} />
            <WorksGallery works={works} />
          </div>
        </div>
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
          coverimage: "page.content.pageimage.toFile",
        },
      },
    },
  });

  return { props: data };
}

export default IndexPage;
