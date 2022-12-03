export { createCards };
const gallery = document.querySelector('.gallery');
function createCards(hits) {
  const cards = hits
    .map(hit => {
      const {
        id,
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = hit;
      return `
        <a class="gallery__item" href="${largeImageURL}" onclick="return false;">
        <div class="photo-card" id=${id}>
        <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
          <p class="info__item"> <b>Likes</b> ${likes} </p>
          <p class="info__item"> <b>Views</b> ${views} </p>
          <p class="info__item"> <b>Comments</b> ${comments} </p>
          <p class="info__item"> <b>Downloads</b> ${downloads} </p>
        </div>
      </div>
      </a>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', cards);
}
