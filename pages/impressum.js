import Head from "@/components/head";
import Layout from "@/components/layout";
import { parseText } from "@/lib/helpers";
import { metaQuery, queryKirby } from "@/lib/queryKirby";
import Link from "next/link";

const ImprintPage = ({ sitemeta, pagemeta, pagecontent }) => (
  <>
    <Head sitemeta={sitemeta} pagemeta={pagemeta} />
    <Layout className="bg-neon" linkTo="/" sitemeta={sitemeta}>
      <div className="col-span-full sm:pb-1">
        <Link href="/">
          <a className="hover:blurred">
            <h1
              dangerouslySetInnerHTML={{ __html: pagecontent?.heading }}
              className="m-0"
            />
          </a>
        </Link>
        <h1
          dangerouslySetInnerHTML={{ __html: pagecontent?.subline }}
          className="m-0"
        />
      </div>
      <div className="col-span-1 sm:col-span-2">
        <div
          dangerouslySetInnerHTML={{ __html: parseText(pagecontent?.content) }}
        />
      </div>
    </Layout>
  </>
);

export async function getStaticProps() {
  const { result } = await queryKirby({
    select: {
      pagecontent: {
        query: "page('impressum').content",
        select: {
          content: "page('impressum').content.text.markdown",
          heading: true,
          subline: true,
          metatitle: true,
          title: true,
          metaimage: true,
          metadescription: true,
        },
      },
      ...metaQuery("impressum"),
    },
  });

  return { props: result };
}

export default ImprintPage;
