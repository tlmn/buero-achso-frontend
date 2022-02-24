import { queryKirby } from "@/lib/queryKirby";

const ImprintPage = ({ result }) => {
  return (
    <>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </>
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
