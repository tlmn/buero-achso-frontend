import axios from "axios";
const { API_USER, API_PASSWORD, API_URL } = process.env;

export const queryKirby = async (query) => {
  const auth = {
    username: API_USER,
    password: API_PASSWORD,
  };

  return await axios
    .post(API_URL, query, {
      auth,
      "Content-Type": "application/json",
    })
    .then(({ data }) => data);
};
