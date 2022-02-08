//generate from login on Unsplash Developers
const API_KEY = 'P1pzg6A8HvBMWBzNbH6BWWiSdvdCyhfBBwXUQRrJPjI';
const BASE_URL = 'https://api.unsplash.com/';

//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
//GET /search/photos

const getData = url => fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw `Упс, что-то пошло не так: ошибка ${response.status}`
  })
  .catch(err => console.error(err));

export const getPhotos = async () => {
  const url = `${BASE_URL}/photos/?client_id=${API_KEY}`;
  return await getData(url);
};