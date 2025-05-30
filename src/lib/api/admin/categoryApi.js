import {CATEGORY_URLS} from "@/lib/url/urls";
import { apiGet, apiPost } from "@/lib/axios/api-client";

export const fetchCategory = async (data) => {
    return await apiGet(`${CATEGORY_URLS.GET_CATEGORIES}?postType=${data}`);
}

export const setNewCategory = async (data) => {
    return await apiPost(`${CATEGORY_URLS.SET_CATEGORIES}?postType=${data.postType}`,data.formData);
}
