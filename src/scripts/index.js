// import 'regenerator-runtime';
import '../styles/main.scss';
import App from './views/app';
import swRegister from './utils/sw-register';
// import 'lazysizes';
// import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import('regenerator-runtime')
  .then((module) => module.default)
  .catch((error) => alert(error));

import('lazysizes')
  .then((module) => module.default)
  .catch((error) => alert(error));

import('lazysizes/plugins/parent-fit/ls.parent-fit')
  .then((module) => module.default)
  .catch((error) => alert(error));

const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('.nav-menu'),
  content: document.querySelector('#mainContent'),
  cards: document.querySelector('.menu'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
