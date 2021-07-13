import axios from "axios";

export const getApiData = async ({
  currency = "inr",
  order = "market_cap_desc",
  page = 1,
}) => {
  try {
    return axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${order}&per_page=100&page=${page}&sparkline=false`
    );
  } catch (error) {
    console.error(error);
  }
};
