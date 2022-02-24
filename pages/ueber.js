import { queryKirby } from "@/lib/queryKirby";
import Image from "@/components/image";
import Layout from "@/components/layout";

const AboutPage = ({ result: { content, portraitImage, pageImage } }) => {
  return (
    <Layout className="bg-lightPink">
      <pre>{JSON.stringify(content, null, 2)}</pre>
      <Image {...pageImage} />
      <Image {...portraitImage} />
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await queryKirby({
    query: "page('ueber')",
    select: {
      content: true,
      pageImage: {
        query: "page.content.pageImage.toFile",
      },
      portraitImage: {
        query: "page.content.portraitimage.toFile",
      },
    },
  });

  return { props: data };
}

export default AboutPage;
