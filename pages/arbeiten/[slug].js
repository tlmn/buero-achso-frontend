import Layout from "@/components/layout";
import WorkGallery from "@/components/workGallery/workGallery";
import { metaQuery, queryKirby } from "@/lib/queryKirby";
import Head from "@/components/head";
import { parseText } from "@/lib/helpers";

const WorkPage = ({
  data: {
    sitemeta,
    pagemeta,
    pagecontent: {
      gallery,
      content: { title, credits, description },
    },
  },
}) => (
  <>
    <Head sitemeta={sitemeta} pagemeta={pagemeta} />
    <Layout className="bg-white" linkTo="/" sitemeta={sitemeta}>
      <div className="col-span-full">
        {title !== "" && (
          <h1
            dangerouslySetInnerHTML={{ __html: title }}
            className="pr-4 mt-0 mb-1 sm:mb-2 lg:mb-3"
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
            __html: parseText(description),
          }}
          className="block runningText aspect-square"
        />
      </div>
    </Layout>
  </>
);

export default WorkPage;

export async function getStaticPaths() {
  const { result } = await queryKirby({
    query: "page('arbeiten')",
  });

  const children = result?.children || [];

  const paths = children?.map((child) => ({
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
