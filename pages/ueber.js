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
      <div className="bg-lightPink flex">
        <div className="rounded-full left-0 right-0 mx-auto sm:m-0 w-[95vw] sm:w-[30vw] sm:top-[30vw] sm:left-[20vw]  top-[50vw] bg-neon aspect-square absolute z-10" />
        <Layout className="z-20 relative" linkTo="/">
          <div className="col-span-full sm:pb-1">
            <h1
              dangerouslySetInnerHTML={{ __html: content.heading }}
              className="m-0"
            />
            <h1
              dangerouslySetInnerHTML={{ __html: content.subline }}
              className="m-0"
            />
          </div>
          <div className="col-span-1 hidden md:block">
            <div className="aspect-square md:aspect-auto h-[100px] flex items-center justify-center">
              <span className="-rotate-[15deg] text-neon hi">Hi!</span>
            </div>
          </div>
          <div className="col-span-1 md:col-start-1 flex">
            <div
              onMouseEnter={() => setIsMouseOver(true)}
              onMouseLeave={() => setIsMouseOver(false)}
              className="aspect-square w-1/2 md:w-full"
            >
              {isMouseOver ? (
                <Image {...portraitimagehover} />
              ) : (
                <Image {...portraitimage} />
              )}
            </div>
            <div className="w-1/2 flex items-center justify-center md:hidden">
              <span className="-rotate-[15deg] text-neon hi">Hi!</span>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 col-start-1">
            <span
              dangerouslySetInnerHTML={{ __html: contactinfo }}
              className="runningText md:chapterHeading"
            />
            <div>
              {socialmedia.map(({ socialmedianame, socialmediaurl }) => (
                <a
                  href={socialmediaurl}
                  dangerouslySetInnerHTML={{ __html: `∞ ${socialmedianame}` }}
                  className="runningText md:chapterHeading hover:underline no-underline"
                />
              ))}
            </div>
          </div>
          <div className="col-span-1 col-start-1 md:col-span-2">
            <span
              dangerouslySetInnerHTML={{ __html: text }}
              className="runningText md:chapterHeading"
            />
          </div>
          <Footer {...sitemeta} />
        </Layout>
      </div>
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
