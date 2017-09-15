import merge from 'lodash/merge';
import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const itemReducer = (oldState = {}, action) => {
  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON :
      const items = {};
      action.pokemon.items.forEach( item => {
        items[item.id] = item;
      });
      return items;

    default:
      return {};
  }
};

export default itemReducer;
