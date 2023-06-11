import { metaQuery, queryKirby } from "@/lib/queryKirby";
import Image from "@/components/image";
import Layout from "@/components/layout";
import Head from "@/components/head";
import { useState } from "react";
import { parseText } from "@/lib/helpers";
import Link from "next/link";

const AboutPage = ({ sitemeta, pagemeta, pagecontent }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <>
      <Head sitemeta={sitemeta} pagemeta={pagemeta} />
      <div className="flex bg-lightPink">
        <div className="rounded-full left-0 right-0 mx-auto sm:m-0 w-[95vw] sm:w-[30vw] sm:top-[30vw] sm:left-[20vw]  top-[50vw] bg-neon aspect-square absolute z-10" />
        <Layout className="relative z-20" linkTo="/" sitemeta={sitemeta}>
          <div className="col-span-full sm:pb-1">
            <Link href="/">
              <a className="hover:blurred">
                <h1
                  dangerouslySetInnerHTML={{
                    __html: pagecontent?.content?.heading,
                  }}
                  className="m-0"
                />
              </a>
            </Link>
            <h1
              dangerouslySetInnerHTML={{
                __html: pagecontent?.content?.subline,
              }}
              className="m-0"
            />
          </div>
          <div className="hidden col-span-1 md:block">
            <div className="aspect-square md:aspect-auto h-[100px] flex items-center justify-center">
              <span className="-rotate-[15deg] text-neon hi">Hi!</span>
            </div>
          </div>
          <div className="flex col-span-1 md:col-start-1">
            <div
              onMouseEnter={() => setIsMouseOver(true)}
              onMouseLeave={() => setIsMouseOver(false)}
              className="w-1/2 aspect-square md:w-full"
            >
              {isMouseOver ? (
                <Image {...pagecontent?.portraitimagehover} />
              ) : (
                <Image {...pagecontent?.portraitimage} />
              )}
            </div>
            <div className="flex items-center justify-center w-1/2 md:hidden">
              <span className="-rotate-[15deg] text-neon hi">Hi!</span>
            </div>
          </div>
          <div className="col-span-1 col-start-1 md:col-span-2">
            <span
              dangerouslySetInnerHTML={{
                __html: parseText(pagecontent?.contactinfo),
              }}
              className="runningText md:chapterHeading"
            />
            <div>
              {pagecontent?.socialmedia?.map(
                ({ socialmedianame, socialmediaurl }) => (
                  <a
                    href={socialmediaurl}
                    dangerouslySetInnerHTML={{ __html: `∞ ${socialmedianame}` }}
                    className="no-underline runningText md:chapterHeading hover:underline"
                  />
                )
              )}
            </div>
          </div>
          <div className="col-span-1 col-start-1 md:col-span-2">
            <span
              dangerouslySetInnerHTML={{ __html: parseText(pagecontent?.text) }}
              className="runningText md:chapterHeading"
            />
          </div>
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
