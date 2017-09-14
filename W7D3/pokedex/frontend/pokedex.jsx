import React from 'react';
import ReactDOM from 'react-dom';

import * as APIUtil from "./util/api_util";
import {RECEIVE_ALL_POKEMON, receiveAllPokemon, requestAllPokemon} from "./actions/pokemon_actions";
import defaultReducer from "./reducers/pokemon_reducer";
import configureStore from "./store/store";
import selectAllPokemon from "./reducers/selectors";
import Root from "./components/root";

window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = APIUtil.fetchAllPokemon;
window.defaultReducer = defaultReducer;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
