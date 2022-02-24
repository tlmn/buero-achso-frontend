import Layout from "@/components/layout";
import WorkGallery from "@/components/workGallery/workGallery";
import { queryKirby } from "@/lib/queryKirby";
import Head from "next/head";

const WorkPage = ({ data: { content, gallery, site, pageimage } }) => (
    <>
        <Head>
            <title>
                {content.title} – {site.title}
            </title>
            <meta name="description" content={content.pagedescription} />
            {pageimage?.url !== undefined && (
                <meta property="og:image" content={pageimage.url} />
            )}
        </Head>
        <Layout className="bg-white">
            <h1 dangerouslySetInnerHTML={{ __html: content.title }} />
            {content?.subtitle && (
                <h2 dangerouslySetInnerHTML={{ __html: content.subtitle }} />
            )}
            {content?.collaborators && (
                <h2 dangerouslySetInnerHTML={{ __html: content.collaborators }} />
            )}
            {content?.time && (
                <h2 dangerouslySetInnerHTML={{ __html: content.time }} />
            )}
            <WorkGallery gallery={gallery} />
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
            pageimage: {
                query: "page.content.pageimage.toFile",
            },
            gallery: {
                query: "page.content.images.toFiles",
                select: {
                    url: true,
                    width: true,
                    height: true,
                    alt: true,
                },
            },
            site: {
                query: "site",
            },
        },
    });

    return { props: { data: result } };
}
