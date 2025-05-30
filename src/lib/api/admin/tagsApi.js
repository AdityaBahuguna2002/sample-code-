import {TAG_URLS} from "@/lib/url/urls";
import { apiGet } from "@/lib/axios/api-client";

export const getTags = async (data) => {
    return await apiGet(`${TAG_URLS.GET_TAGS}?postType=${data}`);
}

