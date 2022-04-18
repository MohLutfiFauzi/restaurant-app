import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (resto) => {
  const { restaurant } = resto;
  let foods = '';
  let drinks = '';
  let customerReviews = '';

  restaurant.menus.foods.forEach((nameFood) => {
    foods += `${nameFood.name}, `;
  });

  restaurant.menus.drinks.forEach((namedrink) => {
    drinks += `${namedrink.name}, `;
  });

  restaurant.customerReviews.forEach((customerReview) => {
    customerReviews += `<p> ${customerReview.name} = "${customerReview.review}" , pada tanggal :  ${customerReview.date}</p>`;
  });

  return `
    <div class="card">
      <div class="rating">${restaurant.rating} <i class="uil uil-star"></i></div>
      <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}" alt="restaurants name is ${restaurant.name}" id="${restaurant.id}" />
      <h3>====== ${restaurant.name} ======</h3>
      <h3>Alamat : </h3>
      <p>${restaurant.address}</p>
      <h3>Kota : </h3>
      <p> ${restaurant.city}</p>
      <h3>Menu makanan : </h3>
      <p>${foods}</p>
      <h3>Menu minuman : </h3>
      <p>${drinks} </p>
      <h3>Deskripsi : </h3>
      <p>${restaurant.description}</p>
      <h3>Customer Reviews </h3>
      ${customerReviews}
      <a href="${'/#/home/'}">Back To List</a>
    </div>
  `;
};

const createRestaurantItemTemplate = (restaurant) => `
  <div class="card">
      <div class="rating">${restaurant.rating} <i class="uil uil-star"></i></div>
      <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}" alt="restaurants name is ${restaurant.name}" id="${restaurant.id}" />
      <h3>${restaurant.name}</h3>
      <p>${restaurant.city}</p>
      <a href="${`/#/detail/${restaurant.id}`}">Detail Restaurant</a>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
