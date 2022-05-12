import Layout from "@/components/layout";
import WorkGallery from "@/components/workGallery/workGallery";
import { metaQuery, queryKirby } from "@/lib/queryKirby";
import Head from "@/components/head";
import Footer from "@/components/footer";

const WorkPage = ({
  data: {
    sitemeta,
    pagemeta,
    pagecontent: {
      gallery,
      content: { title, subline, credits, description },
    },
  },
}) => {
  return (
    <>
      <Head sitemeta={sitemeta} pagemeta={pagemeta} />
      <Layout className="bg-white" linkTo="/">
        <div className="col-span-full">
          {title !== "" && (
            <h1
              dangerouslySetInnerHTML={{ __html: title }}
              className="mb-1 sm:mb-2 lg:mb-3 pr-4 mt-0"
            />
          )}
          {credits !== "" && (
            <span
              dangerouslySetInnerHTML={{ __html: credits }}
              className="block runningText mb-1 sm:min-h-[12rem] pr-2"
            />
          )}
        </div>
        <WorkGallery gallery={gallery} />
        <div className="col-span-1">
          <span
            dangerouslySetInnerHTML={{
              __html: description,
            }}
            className="block runningText aspect-square"
          />
        </div>
        <Footer {...sitemeta} />
      </Layout>
    </>
  );
};

export default WorkPage;

export async function getStaticPaths() {
  const {
    result: { children },
  } = await queryKirby({
    query: "page('arbeiten')",
  });

  const paths = children.map((child) => ({
    params: { slug: child.replace("arbeiten/", "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const { result } = await queryKirby({
    select: {
      pagecontent: {
        select: {
          content: `page('arbeiten/${slug}').content`,
          gallery: {
            query: `page('arbeiten/${slug}').content.images.toFiles`,
            select: {
              url: true,
              width: true,
              height: true,
              alt: true,
              credits: true,
              srcset: "file.srcset([300, 800, 1024])",
            },
          },
        },
      },
      ...metaQuery(`arbeiten/${slug}`),
    },
  });

  return { props: { data: result } };
}
