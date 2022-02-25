import { queryKirby } from "@/lib/queryKirby";
import Image from "@/components/image";
import Layout from "@/components/layout";

const AboutPage = ({ result: { content, portraitimage, ogimage } }) => {
  return (
    <Layout className="bg-lightPink">
      <pre>{JSON.stringify(content, null, 2)}</pre>
      <Image {...ogimage} />
      <Image {...portraitimage} />
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await queryKirby({
    query: "page('ueber')",
    select: {
      content: true,
      ogimage: {
        query: "page.content.ogimage.toFile",
      },
      portraitimage: {
        query: "page.content.portraitimage.toFile",
      },
    },
  });

  return { props: data };
}

export default AboutPage;
