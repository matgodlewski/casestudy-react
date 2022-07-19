import axios from 'axios';

export default function fetchPublicApis() {
  return axios.get('https://api.publicapis.org/entries')
    .then((response) => response.data)
    .catch((error) => {
      console.log(`error:${error}`);
      throw error;
    });
}
