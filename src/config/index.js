import axios from 'axios';
 const config = {
  apiURL: 'https://reqres.in/api',
};
 axios.defaults.baseURL = config.apiURL;
 axios.defaults.headers.post['Content-Type'] = 'application/json';
 export default config;
