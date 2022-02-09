import { search as getSearch } from './service.js';
import renderCards from './renderCards.js';

const title = document.querySelector('.title');
const searchForm = document.querySelector('.header-search-form');
const searchInput = document.querySelector('.header-search-input');

const search = () => {
  searchForm.addEventListener('submit', e => {
    e.preventDefault();

    if (!searchInput.value) return;

    getSearch(searchInput.value)
      .then(data => {
        console.log(data);
        if (data.results.length) {
          renderCards(data.results);
        } else {
          throw 'Ooops, we can\'t find your request... Try again!';
        }
      })
      .then(() => {
        title.textContent = 'Search result:';
      })
      .catch(err => {
        title.textContent = err;
      })
  })
};

export default search;