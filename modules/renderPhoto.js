import { getPhotos } from "./service.js";
const headerPoster = document.querySelector('.header');

const firstRender = data => {
  headerPoster.style.backgroundImage = `url('${data.links.download}')`;
}

const renderPhoto = async () => {
  const data = await getPhotos();
  firstRender(data[0]);
}

export default renderPhoto;