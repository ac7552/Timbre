import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', function(){
     let store;
     if (window.currentUser) {
        const initialState = {session: {currentUser: window.currentUser}};
        store = configureStore(initialState);
      } else {
        store = configureStore();


      }     const root = document.getElementById('root');

  

      window.store = store;
     ReactDOM.render(<Root store={store}/>, root);

});
