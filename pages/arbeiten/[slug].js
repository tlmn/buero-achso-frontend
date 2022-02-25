import Layout from "@/components/layout";
import WorkGallery from "@/components/workGallery/workGallery";
import { queryKirby } from "@/lib/queryKirby";
import Head from "next/head";

const WorkPage = ({ data: { content, gallery, site, ogimage } }) => (
    <>
        <Head>
            <title>
                {content.title} – {site.title}
            </title>
            <meta name="description" content={content.pagedescription} />
            {ogimage?.url !== undefined && (
                <meta property="og:image" content={ogimage.url} />
            )}
        </Head>
        <Layout className="bg-white">
            <div className="col-span-full">
                <h1 dangerouslySetInnerHTML={{ __html: content.title }} />
                {content?.subtitle !== null && (
                    <h2 dangerouslySetInnerHTML={{ __html: content.subtitle }} />
                )}
                {content?.credits && (
                    <span dangerouslySetInnerHTML={{ __html: content.credits }} className="runningText mb-32" />
                )}
            </div>
            <WorkGallery gallery={gallery} />
            <div className="col-span-1">
                <span dangerouslySetInnerHTML={{ __html: content.description }} className="runningText" />
            </div>
        </Layout>
    </>
);

export default WorkPage;

export async function getStaticPaths() {
    const { result: children } = await queryKirby({
        query: "page('arbeiten').children",
    });
    const paths = children.map((child) => ({
        params: { slug: child.replace("arbeiten/", "") },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
    const { result } = await queryKirby({
        query: `page('arbeiten/${slug}')`,
        select: {
            content: true,
            ogimage: {
                query: "page.content.ogimage.toFile",
            },
            gallery: {
                query: "page.content.images.toFiles",
                select: {
                    url: true,
                    width: true,
                    height: true,
                    alt: true,
                    srcset: "file.srcset([300, 800, 1024])"
                },
            },
            site: {
                query: "site",
            },
        },
    });

    return { props: { data: result } };
}
