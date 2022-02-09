import { getPhotos } from "./service.js";
import renderCards from "./renderCards.js";

const headerPoster = document.querySelector('.header');

const firstRender = data => {
  headerPoster.style.backgroundImage = `url('${data.links.download}')`;
};

const renderPhoto = async () => {
  const data = await getPhotos();
  const [firstImage, ...otherImages] = data;

  firstRender(firstImage);
  renderCards(otherImages);
};

export default renderPhoto;