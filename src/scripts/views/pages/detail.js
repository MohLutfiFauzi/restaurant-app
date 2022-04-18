import UrlParser from '../../routes/url-parser';
import restaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <h2>Detail Restaurant</h2>
    <p>details regarding the list of selected restaurants</p>
    <div id="cards" class="cards-detail"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await restaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('.cards-detail');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        rating: restaurant.restaurant.rating,
        pictureId: restaurant.restaurant.pictureId,
        city: restaurant.restaurant.city,
      },
    });
  },
};

export default Detail;
