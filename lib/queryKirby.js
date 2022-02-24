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
    .then(({ data }) => data);
};
