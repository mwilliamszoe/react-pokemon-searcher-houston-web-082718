import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";

class PokemonPage extends React.Component {
  state = {
    pokemonList: [],
    filteredList: []
  };

  componentDidMount = () => {
    fetch(" http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(pokemonList =>
        this.setState({
          pokemonList: pokemonList,
          filteredList: pokemonList
        })
      );
  };

  searchPokemon = event => {
    const desiredPokemon = this.state.pokemonList.filter(pokemon => {
      return pokemon.name.includes(event.target.value);
    });
    this.setState({
      filteredList: desiredPokemon
    });
  };

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.searchPokemon} showNoResults={false} />
        <br />
        <PokemonCollection filteredList={this.state.filteredList} />
        <br />
        <PokemonForm />
      </div>
    );
  }
}

export default PokemonPage;
