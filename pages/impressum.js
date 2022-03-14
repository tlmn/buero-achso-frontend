import Footer from "@/components/footer";
import Head from "@/components/head";
import Layout from "@/components/layout";
import { metaQuery, queryKirby } from "@/lib/queryKirby";

const ImprintPage = ({ sitemeta, pagemeta, pagecontent }) => (
  <>
    <Head sitemeta={sitemeta} pagemeta={pagemeta} />
    <Layout className="bg-neon" linkTo="/">
      <div className="col-span-full pb-1">
        <h1 dangerouslySetInnerHTML={{ __html: content.heading }} />
        <h1 dangerouslySetInnerHTML={{ __html: content.subline }} />
      </div>
      <div className="col-span-1 sm:col-span-2">
        <h1>{pagecontent.title}</h1>
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
