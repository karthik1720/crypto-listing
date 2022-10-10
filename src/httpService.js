import axios from "axios";

// Add a request interceptor
// axios.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     // OR config.headers.common['Authorization'] = `Bearer ${your_token}`;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
export default http;
