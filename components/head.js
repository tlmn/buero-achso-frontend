import { default as NextHead } from "next/head";

const Head = (props) => {
  const {
    sitemeta: { metaauthor, url, metakeywords },
    pagemeta: {
      metatitle,
      metadescription,
      metaimage
    },
  } = props

  const { url: metaimageurl } = metaimage || {}
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      {metatitle !== undefined && <title>{metatitle}</title>}

      {metadescription !== undefined && (
        <meta name="description" content={metadescription} />
      )}

      {metakeywords !== undefined && (
        <meta
          name="keywords"
          content={metakeywords.map(({ keyword }) => keyword)}
        />
      )}

      {metaauthor !== undefined && (
        <meta name="author" content={metaauthor} />
      )}

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:type" content="website" />
      {url !== undefined && <meta property="og:url" content={url} />}
      {metatitle !== undefined && (
        <meta property="og:title" content={metatitle} />
      )}
      {metadescription !== undefined && (
        <meta property="og:description" content={metadescription} />
      )}
      {metaimageurl !== undefined && (
        <meta property="og:image" content={metaimageurl} />
      )}

      <meta property="twitter:card" content="summary_large_image" />
      {url !== undefined && (
        <meta property="twitter:url" content={url} />
      )}
      {metatitle !== undefined && (
        <meta property="twitter:title" content={metatitle} />
      )}
      {metadescription !== undefined && (
        <meta property="twitter:description" content={metadescription} />
      )}
      {metaimageurl !== undefined && (
        <meta property="twitter:image" content={metaimageurl} />
      )}
    </NextHead>
  );
};

export default Head;
