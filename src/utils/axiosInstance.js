import Axios from 'axios';

const axiosInstance = Axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  timeoutErrorMessage: 'Request Timeout. try after sometime',
});

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      const jsonToken = JSON.parse(token);
      config.headers.Authorization = `Bearer ${jsonToken.accessToken}`;
    }
    return config;
  },
  err => Promise.reject(err),
);

axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    if (err?.response.data) {
      return Promise.reject(new Error(err.response.data));
    }
    return Promise.reject(err);
  },
);

export default axiosInstance;
