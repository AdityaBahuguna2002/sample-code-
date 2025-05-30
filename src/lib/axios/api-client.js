import axios from './axios'

export const apiGet = async (url, config = {}) => {
  try {
    const res = await axios.get(url, config);
    return res.data;
  } catch (error) {
    console.error('apiGet error:', error);
    return error; 
  }
};


export const apiPost = async (url, data = {}, config = {}) => {
  const response = await axios.post(url, data, config)
  return response.data
}

export const apiPut = async (url, data = {}, config = {}) => {
  const response = await axios.put(url, data, config)
  return response.data
}

export const apiDelete = async (url, config = {}) => {
  const response = await axios.delete(url, config)
  return response.data
}
