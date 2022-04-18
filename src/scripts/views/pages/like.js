import favoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <h2>Restaurant Favorite</h2>
      <p>restaurants that have very good ratings in our various regions</p>
      <div id="cards" class="cards-menu"></div>
    `;
  },

  async afterRender() {
    const restaurantFavorite = await favoriteRestaurantIdb.getAllRestaurants();
    const restaurantFavoriteContainer = document.querySelector('.cards-menu');
    restaurantFavorite.forEach((restaurant) => {
      restaurantFavoriteContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
