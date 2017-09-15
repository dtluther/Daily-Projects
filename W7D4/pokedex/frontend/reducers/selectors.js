import values from 'lodash/values';

export const selectAllPokemon = ({ entities }) => {
  const arrayPokemon = values(entities.pokemon);
  return arrayPokemon;
};

export const selectItems = ({ entities }) => {
  return values(entities.items);
};

// export const selectSinglePokemon = ({ entities, ui }) => {
//   return (Object.keys(entities.pokemon[ui.pokeDisplay])
//           .map( key => entities.pokemon[ui.pokeDisplay][key]));
// };
