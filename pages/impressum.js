import Footer from "@/components/footer";
import Head from "@/components/head";
import Layout from "@/components/layout";
import { metaQuery, queryKirby } from "@/lib/queryKirby";

const ImprintPage = ({ sitemeta, pagemeta, pagecontent }) => (
  <>
    <Head sitemeta={sitemeta} pagemeta={pagemeta} />
    <Layout className="bg-neon">
      <div
        className="col-span-1 sm:col-span-2"
        dangerouslySetInnerHTML={{ __html: pagecontent.content }}
      />
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
          metatitle: true,
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
