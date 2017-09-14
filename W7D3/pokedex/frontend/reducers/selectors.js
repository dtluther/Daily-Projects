import values from 'lodash/values';

const selectAllPokemon = ({ entities }) => {
  const arrayPokemon = values(entities.pokemon);
  return arrayPokemon;
};

export default selectAllPokemon;
