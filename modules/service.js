const API_KEY = 'P1pzg6A8HvBMWBzNbH6BWWiSdvdCyhfBBwXUQRrJPjI';
const BASE_URL = 'https://api.unsplash.com/';

const getData = url => fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw `Ooops, something is wrong. Error: ${response.status}`
  })
  .catch(err => console.error(err));

export const getPhotos = async () => {
  const url = `${BASE_URL}photos/?client_id=${API_KEY}`;
  return await getData(url);
};

export const search = async (query) => {
  const url = `${BASE_URL}search/photos?client_id=${API_KEY}&query=${query}`;
  return await getData(url);
};