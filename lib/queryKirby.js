import axios from "axios";

export const queryKirby = async (query) => {
  const auth = {
    username: process.env.API_USER,
    password: process.env.API_PASSWORD,
  };

  return await axios
    .post(process.env.API_URL, query, {
      auth,
      "Content-Type": "application/json",
    })
    .then(({ data }) => data)
    .catch((error) => error);
};

export const metaQuery = (page) => ({
  sitemeta: {
    query: "site.content",
    select: {
      sitetitle: true,
      metaauthor: true,
      metakeywords: "site.content.metakeywords.toStructure",
      footer: true,
      footercopyright: true,
    },
  },
  pagemeta: {
    query: `page('${page}').content`,
    select: {
      metatitle: true,
      metadescription: true,
      metaimage: `page('${page}').content.metaimage.toFile`,
    },
  },
});
