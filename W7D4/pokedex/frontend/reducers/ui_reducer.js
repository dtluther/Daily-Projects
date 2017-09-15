import {RECEIVE_ALL_POKEMON,
        RECEIVE_SINGLE_POKEMON} from "../actions/pokemon_actions";
import merge from 'lodash/merge';

const initialState = {
  pokeDisplay: null,
  errors: {},
  loading: {}
};

const uiReducer = (oldState = initialState, action) => {
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return initialState;

    case RECEIVE_SINGLE_POKEMON:
      return merge({},
                   oldState,
                   {pokeDisplay: action.pokemon.pokemon.id});

    default:
      return initialState;
  }
};

export default uiReducer;
