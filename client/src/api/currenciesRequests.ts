import { request } from "./createRequest";

export const getCurrencies = async () => {
  const currencies = await request({
    url: "",
    method: "GET",
  });
  return currencies.data;
};

export const getCurrencysHistory = async (id: string) => {
  const history = await request({
    url: `/${id}/history?interval=d1`,
    method: "GET",
  });
  return history.data;
};
