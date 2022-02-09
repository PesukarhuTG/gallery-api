const listCards = document.querySelector('.grid');

const renderCards = data => {
  listCards.textContent = '';

  const cards = data.map(item => {

    const card = document.createElement('div');
    card.className = `item ${(item.width > item.height) ? 'item-horizontal' : 'item-vertical'}`;
    card.style.backgroundImage = `url('${item.urls.small}')`;

    const p = document.createElement('p');
    p.className = 'item-size';
    p.textContent = `${item.width}x${item.height}`

    card.append(p);
    return card;
  });

  listCards.append(...cards);
};

export default renderCards;