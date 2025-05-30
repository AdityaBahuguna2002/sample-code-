import { POST_URLS } from "../../url/siteUrl";
import { apiGet } from "@/lib/axios/api-client";

export const getRelatedPostHome = async () => {
  return await apiGet(`${POST_URLS.GET_RELATED_CONTENT_HOME}`);
};
