import axios from "axios";

let apiUrl;
//urls build in so that we know when in development mode and when app is deployed
const apiUrls = {
  production: "www.cat-crud-api.heroku.com/api",
  development: "http://localhost:3000/api",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}
//The api variable is created using axios.create(), and the baseURL property is set to the apiUrl variable. This creates an instance of the axios client that is configured to use the appropriate base URL for the current environment it will either be dev or production based on what the hostname is in the browser
const api = axios.create({
  baseURL: apiUrl,
});

export default api;
