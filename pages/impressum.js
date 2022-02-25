import Layout from "@/components/layout";
import { queryKirby } from "@/lib/queryKirby";

const ImprintPage = ({ result }) => {
  return (
    <Layout className="bg-neon">
      <div className="col-span-1" dangerouslySetInnerHTML={{ __html: result.content }} />
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await queryKirby({
    query: "page('impressum')",
    select: {
      content: "page.content.text.markdown",
    },
  });

  return { props: data };
}

export default ImprintPage;
