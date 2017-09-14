import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.pokemon);
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.pokemon.map(
              poke => (
                <li key={poke.name}>
                  {poke.id}
                  <img src={poke.image_url}></img>
                  {poke.name}
                </li>))
          }
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
