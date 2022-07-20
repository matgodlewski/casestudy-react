import axios from 'axios';

export default function fetchPublicApis() {
  return axios.get('https://api.publicapis.org/entries', {
    params: {
      category: 'Development',
    },
  })
    .then((response) => response.data)
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(`error:${error}`);
      throw error;
    });
}
