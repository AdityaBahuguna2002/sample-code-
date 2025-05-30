import { POST_URLS } from "../../url/siteUrl";
import { apiGet } from "@/lib/axios/api-client";

export const getPost = async (slug, postType) => {
  return await apiGet(`${POST_URLS.GET_POST}?postType=${postType}&slug=${slug}`);
};
