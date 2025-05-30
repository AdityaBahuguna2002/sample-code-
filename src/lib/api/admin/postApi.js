import { POST_URLS } from "../../url/urls";
import { apiGet, apiDelete, apiPut, apiPost } from "../../axios/api-client";

export const getAllPosts = async (postType) => {
  return await apiGet(`${POST_URLS.GET_ALL_POST}?postType=${postType}`);
};

export const getPostById = async (id) => {
  return await apiGet(`${POST_URLS.POSTS}?id=${id}`);
};

export const deletePost = async ({id}) => {
  return await apiDelete(`${POST_URLS.DELETE_POST}?id=${id}`);
}

export const switchPostStatus = async ({id}) => {
  return await apiPut(`${POST_URLS.SWITCH_POST_STATUS}?id=${id}`);
}

export const publishOrDraftPost = async (data) => {
  return await apiPost(`${POST_URLS.DRAFT_PUBLISH_POST}`, data);
}

export const removeFeaturedImage = async (data) => {
  return await apiDelete(`${POST_URLS.REMOVE_FEATURED_IMAGE}?url=${data}` );
}

export const uploadFeaturedImage = async (data) => {
  return await apiPost(POST_URLS.FEATURED_IMAGE, data);
}

export const uploadContentImage = async(data)=>{
  return await apiPost(POST_URLS.CONTENT_IMAGE, data);
}

export const updatePost = async (data) => {
  return await apiPut(`${POST_URLS.UPDATE_POST}`, data);
};