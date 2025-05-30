
export const AUTH_URLS = {
  LOGIN: `admin/auth/login`,
  REGISTER: `admin/auth/register`,
  LOGOUT: `admin/auth/logout`,
};

export const POST_URLS = {
  GET_ALL_POST : `admin/posts/getAllPost`,
  POSTS: `admin/posts/getPostById`,
  FEATURED_IMAGE : `admin/posts/uploadFeaturedImage`,
  REMOVE_FEATURED_IMAGE : `admin/posts/removeFeaturedImage`,
  DRAFT_PUBLISH_POST : `admin/posts/uploadPost`,
  DELETE_POST : `admin/posts/deletePostById`,
  SWITCH_POST_STATUS : `admin/posts/switchPostStatus`,
  CONTENT_IMAGE : `admin/posts/uploadContentImage`,
  UPDATE_POST : `admin/posts/updatePost`,
}

export const CATEGORY_URLS = {
  GET_CATEGORIES : `admin/category/getCategories`,
  SET_CATEGORIES : `admin/category/setCategory`,
}


export const TAG_URLS = {
  GET_TAGS : `admin/tags/getTags`,
}
    
