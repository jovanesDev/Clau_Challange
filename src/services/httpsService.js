import axios from 'axios';    

axios.interceptors.request.use(
  function (config) {
    //config.headers.Authorization = `Bearer ${your_token}`;
    config.baseURL = 'https://us-central1-prueba-front-280718.cloudfunctions.net/';
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// eslint-disable-next-line
export default {
  get: axios.get,
  // post: axios.post,
  // put: axios.put,
  // delete: axios.delete,
  // patch: axios.patch
};