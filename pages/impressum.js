import Footer from "@/components/footer";
import Head from "@/components/head";
import Layout from "@/components/layout";
import { metaQuery, queryKirby } from "@/lib/queryKirby";

const ImprintPage = ({ sitemeta, pagemeta, pagecontent }) => (
  <>
    <Head sitemeta={sitemeta} pagemeta={pagemeta} />
    <Layout className="bg-neon" linkTo="/">
      <div className="col-span-full sm:pb-1">
        <h1
          dangerouslySetInnerHTML={{ __html: pagecontent.heading }}
          className="m-0"
        />
        <h1
          dangerouslySetInnerHTML={{ __html: pagecontent.subline }}
          className="m-0"
        />
      </div>
      <div className="col-span-1 sm:col-span-2">
        <div dangerouslySetInnerHTML={{ __html: pagecontent.content }} />
      </div>
      <Footer {...sitemeta} />
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
