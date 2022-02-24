import Layout from "@/components/layout";
import { queryKirby } from "@/lib/queryKirby";

const ImprintPage = ({ result }) => {
  return (
    <Layout className="bg-neon">
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await queryKirby({
    query: "page('impressum')",
    select: {
      content: true,
    },
  });

  return { props: data };
}

export default ImprintPage;
