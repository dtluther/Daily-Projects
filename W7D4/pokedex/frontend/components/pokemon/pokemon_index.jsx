import React from 'react';
import { Route } from 'react-router-dom';

import PokemonIndexItem from "./pokemon_index_item";
import PokemonDetailContainer from "./pokemon_detail_container";

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const {pokemon} = this.props;
    const pokemonItems = this.props.pokemon.map(
      poke => <PokemonIndexItem key={poke.id} pokemon={poke} /> );

    return (
      <div className="index">
        <section className="pokedex">
          <ul>
            {pokemonItems}
          </ul>
        </section>

        <section className="detail">
          <Route path="/pokemon/:pokemonId"
                 component={PokemonDetailContainer}/>
        </section>

      </div>
    );
  }
}

export default PokemonIndex;
