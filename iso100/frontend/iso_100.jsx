import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {login} from './actions/session_actions';
import {requestPhotos, createPhoto} from './actions/photo_actions';
import {requestAlbums, createAlbum} from './actions/album_actions';

window.login = login;
window.requestPhotos = requestPhotos;
window.createPhoto = createPhoto;
window.requestAlbums = requestAlbums;
window.createAlbum = createAlbum;

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser} };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //test
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //test

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
