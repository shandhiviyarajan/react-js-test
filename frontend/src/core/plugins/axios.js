import axios from 'axios';
//set base url and timeout
let BASE_URL = 'http://localhost:8000';
let TIME_OUT = 50000;
//axios interceptors request configuration
axios.interceptors.request.use(
  (config) => {
    config.headers['baseURL'] = BASE_URL;
    config.headers['timeout'] = TIME_OUT;
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
//axios interceptors response configuration
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
//create httpClient function
export const httpClient = () => {
  return axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
    }
  });
};
