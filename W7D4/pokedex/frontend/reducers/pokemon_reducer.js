import merge from "lodash/merge";

import { RECEIVE_ALL_POKEMON,
         RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (oldState = {}, action) => {
  // console.log(oldState);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemons;
    case RECEIVE_SINGLE_POKEMON:
      console.log("ACTION", action);
      let nextState = merge({}, oldState);
      nextState[action.pokemon.pokemon.id] = action.pokemon.pokemon;
      const itemIds = action.pokemon.items.map( item => item.id );
      nextState[action.pokemon.pokemon.id]["item_ids"] = itemIds;
      return nextState;

    default:
      return oldState;
  }
};

export default pokemonReducer;
