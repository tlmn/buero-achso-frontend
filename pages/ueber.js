import { metaQuery, queryKirby } from "@/lib/queryKirby";
import Image from "@/components/image";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import Head from "@/components/head";
import { useState } from "react";

const AboutPage = ({
  sitemeta,
  pagemeta,
  pagecontent: {
    contactinfo,
    text,
    content,
    portraitimage,
    portraitimagehover,
    socialmedia,
  },
}) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <>
      <Head sitemeta={sitemeta} pagemeta={pagemeta} />
      <Layout className="bg-lightPink" linkTo="/">
        <div className="col-span-full">
          <h1 dangerouslySetInnerHTML={{ __html: content.heading }} />
          <span
            className="runningText"
            dangerouslySetInnerHTML={{ __html: content.subline }}
          />
        </div>
        <div className="col-span-1">
          <div
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
          >
            {isMouseOver ? (
              <Image {...portraitimagehover} />
            ) : (
              <Image {...portraitimage} />
            )}
          </div>
        </div>
        <div className="col-span-1">
          <span dangerouslySetInnerHTML={{ __html: contactinfo }} />
          <div>
            {socialmedia.map(({ socialmedianame, socialmediaurl }) => (
              <a
                href={socialmediaurl}
                dangerouslySetInnerHTML={{ __html: socialmedianame }}
              />
            ))}
          </div>
        </div>
        <div className="col-span-1 col-start-1">
          <span dangerouslySetInnerHTML={{ __html: text }} />
        </div>
        <Footer {...sitemeta} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const { result } = await queryKirby({
    select: {
      pagecontent: {
        query: "page('ueber')",
        select: {
          content: true,
          contactinfo: {
            query: "page('ueber').content.contactinfo.markdown",
          },
          text: {
            query: "page('ueber').content.text.markdown",
          },
          portraitimage: "page('ueber').content.portraitimage.toFile",
          portraitimagehover: "page('ueber').content.portraitimagehover.toFile",
          socialmedia: "page('ueber').content.socialmedia.toStructure",
        },
      },
      ...metaQuery("ueber"),
    },
  });

  return { props: result };
}

export default AboutPage;
