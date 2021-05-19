import axios from "axios";

const base_url_endpoint = 'https://jsonplaceholder.typicode.com'

export const GetUsers = (mid) => {
    const endpoint = `${base_url_endpoint}/users`;
    return axios.get(endpoint);
  };