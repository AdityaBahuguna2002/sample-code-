import axios from 'axios'



const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  timeout: 10000, // 10 seconds timeout
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let apiError;
    if (error.response) {
      apiError = {
        status: error.response.data.status,
        error: error.response.data?.message || 'Request failed',
        details: error.response.data?.details,
      };

      if (error.response.status === 401) {
        apiError.error = 'Unauthorized access';
      } else if (error.response.status === 404) {
       apiError = {
        status: 404,
        error: error.response.data.message || 'Not found',
      };

      } else if (error.response.status > 500) {
        apiError.error = 'Server error occurred';
      }
    } else if (error.request) {
      apiError = {
        status: 503,
        error: 'Service unavailable. Please check your network connection.',
      };
    } else {
      apiError = {
        status: 500,
        error: error.message || 'Request configuration error',
      };
    }

    if (process.env.NODE_ENV === 'development') {
      console.error('API Error:', apiError);
    }

    return Promise.reject(apiError);
  }
);

export default axiosInstance
