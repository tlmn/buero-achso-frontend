import { default as NextHead } from "next/head";

const Head = ({
  sitemeta: { metaauthor, url, metakeywords },
  pagemeta: {
    metatitle,
    metadescription,
    metaimage: { url: metaimageurl },
  },
}) => {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      {typeof metatitle !== undefined && <title>{metatitle}</title>}

      {typeof metadescription !== undefined && (
        <meta name="description" content={metadescription} />
      )}

      {typeof metakeywords !== undefined && (
        <meta
          name="keywords"
          content={metakeywords.map(({ keyword }) => keyword)}
        />
      )}

      {typeof metaauthor !== undefined && (
        <meta name="author" content={metaauthor} />
      )}

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:type" content="website" />
      {typeof url !== undefined && <meta property="og:url" content={url} />}
      {typeof metatitle !== undefined && (
        <meta property="og:title" content={metatitle} />
      )}
      {typeof metadescription !== undefined && (
        <meta property="og:description" content={metadescription} />
      )}
      {typeof metaimageurl !== undefined && (
        <meta property="og:image" content={metaimageurl} />
      )}

      <meta property="twitter:card" content="summary_large_image" />
      {typeof url !== undefined && (
        <meta property="twitter:url" content={url} />
      )}
      {typeof metatitle !== undefined && (
        <meta property="twitter:title" content={metatitle} />
      )}
      {typeof metadescription !== undefined && (
        <meta property="twitter:description" content={metadescription} />
      )}
      {typeof metaimageurl !== undefined && (
        <meta property="twitter:image" content={metaimageurl} />
      )}
    </NextHead>
  );
};

export default Head;
