import restaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <h2>Restaurant List</h2>
      <p>restaurants that have very good ratings in our various regions</p>
      <div id="cards" class="cards-menu"></div>
    `;
  },

  async afterRender() {
    const restaurantList = await restaurantDbSource.home();
    const restaurantContainer = document.querySelector('.cards-menu');
    restaurantList.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
