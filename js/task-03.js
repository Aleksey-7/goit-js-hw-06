const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListEl = document.querySelector('.gallery');

const makeGalleryCardMarkup = ({ url, alt }) => {
  return `
    <li class="gallery__item">
      <img class="gallery__image"
        src=${url}
        alt=${alt}
      >
    </li>
  `;
};

console.log(makeGalleryCardMarkup(images[0]));

const makeGalleryCard = images.map(makeGalleryCardMarkup).join('');

galleryListEl.insertAdjacentHTML('afterbegin', makeGalleryCard);

// const makeGalleryCard = ({ url, alt }) => {
//   const galleryItemEl = document.createElement('li');
//   galleryItemEl.classList.add('gallery__item');

//   const imageEl = document.createElement('img');
//   imageEl.classList.add('gallery__image');
//   imageEl.src = url;
//   imageEl.alt = alt;

//   galleryItemEl.appendChild(imageEl);
//   return galleryItemEl;
// };

// console.log(makeGalleryCard(images[0]));

// const items = images.map(makeGalleryCard);

// galleryListEl.append(...items);
