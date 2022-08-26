import { default as NextHead } from "next/head";

const Head = (props) => {
  const {
    pagemeta
  } = props;

  const metaimageurl = pagemeta?.metaimage?.url || {};
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      {pagemeta?.metatitle !== undefined && <title>{pagemeta?.metatitle}</title>}

      {pagemeta?.metadescription !== undefined && (
        <meta name="description" content={pagemeta?.metadescription} />
      )}

      {pagemeta?.metakeywords !== undefined && (
        <meta
          name="keywords"
          content={pagemeta?.metakeywords?.map(({ keyword }) => keyword)}
        />
      )}

      {pagemeta?.metaauthor !== undefined && <meta name="author" content={pagemeta?.metaauthor} />}

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:type" content="website" />
      {pagemeta?.url !== undefined && <meta property="og:url" content={pagemeta?.url} />}
      {pagemeta?.metatitle !== undefined && (
        <meta property="og:title" content={pagemeta?.metatitle} />
      )}
      {pagemeta?.metadescription !== undefined && (
        <meta property="og:description" content={pagemeta?.metadescription} />
      )}
      {pagemeta?.metaimageurl !== undefined && (
        <meta property="og:image" content={pagemeta?.metaimageurl} />
      )}

      <meta property="twitter:card" content="summary_large_image" />
      {pagemeta?.url !== undefined && <meta property="twitter:url" content={pagemeta?.url} />}
      {pagemeta?.metatitle !== undefined && (
        <meta property="twitter:title" content={pagemeta?.metatitle} />
      )}
      {pagemeta?.metadescription !== undefined && (
        <meta property="twitter:description" content={pagemeta?.metadescription} />
      )}
      {pagemeta?.metaimageurl !== undefined && (
        <meta property="twitter:image" content={pagemeta?.metaimageurl} />
      )}
    </NextHead>
  );
};

export default Head;
