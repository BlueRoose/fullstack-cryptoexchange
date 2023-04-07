import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.coincap.io/v2/assets",
});

type RequestType = {
  method: string;
  url: string;
};

export const request = async ({ method, url }: RequestType) => {
  const options = {
    method,
    url,
    headers: {
      Authorization: "Bearer 82b2c992-1a88-44ee-ba14-865cd6d7323a",
      "Content-type": "multipart/form-data",
    },
  };

  try {
    const result = await axiosInstance(options);
    return result.data;
  } catch (error) {
    throw error;
  }
};
