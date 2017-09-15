import React from 'react';

class pokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    // this.x = this.props;
  }

  componentDidMount() {
    this.props.requestSinglePokemon(
      parseInt(this.props.match.params.pokemonId));
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.pokemonId !==
          this.props.match.params.pokemonId) {
            this.props.requestSinglePokemon(
              parseInt(newProps.match.params.pokemonId));
          }
  }

  render() {
    console.log(this.props);
    const pokemon = this.props.pokemon;
    const items = this.props.items;

    let pokemonStats;

    if (pokemon) {
      pokemonStats = (
        <ul>
          <li><img src={pokemon.image_url}></img></li>
          <li>{pokemon.name}</li>
          <li>{pokemon.poke_type}</li>
          <li>{pokemon.attack}</li>
          <li>{pokemon.defense}</li>
          <li>Moves: {pokemon.moves}</li>
          <li>{pokemon.item_ids}</li>
        </ul>
      );
    } else {
      pokemonStats = null;
    }

    return (
      <div>
        {pokemonStats}
      </div>
    );
  }
}

export default pokemonDetail;
