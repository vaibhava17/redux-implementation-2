import { get, post, put, deleteRequest } from "../utils/api";

export const getRegionsData = async (regionName) => {
  const response = await get(`/region/${regionName}`);
  return response.data;
};


