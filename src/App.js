import React from "react";
import Form from "./components/form.jsx";
import Content from "./components/content.jsx";
import axios from "axios";

import "./App.css";

const initialState = {
  pokemon: null,
  id: 0,
  abilities: [""],
  picture: "",
  isLoading: true,
  error: false,
  habitat: null,
  colour: null
};

class App extends React.Component {
  state = {
    pokemon: null,
    id: 0,
    abilities: [""],
    picture: "",
    isLoading: true,
    error: false,
    habitat: null,
    colour: null
  };

  fetchData = input => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${input}/`)
      .then(pokemon => {
        return Promise.all([
          pokemon,
          axios.get(
            `https://pokeapi.co/api/v2/pokemon-species/${pokemon.data.id}/`
          )
        ]);
      })
      .then(response => {
        input = input[0].toUpperCase() + input.slice(1);
        this.setState({
          pokemon: input,
          id: response[0].data.id,
          abilities: response[0].data.abilities,
          picture: response[0].data.sprites.front_default,
          type: response[0].data.types[0].type.name,
          isLoading: false,
          error: false,
          habitat: response[1].data.habitat.name,
          colour: response[1].data.color.name
        });
      })
      .catch(err =>
        this.setState({
          error: true,
          pokemon: null,
          id: 0,
          picture: "",
          abilities: [""],
          type: null,
          isLoading: true,
          habitat: null,
          colour: null
        })
      );
  };

  handleClick = () => {
    this.setState(initialState);
  };

  render() {
    const {
      pokemon,
      picture,
      abilities,
      id,
      type,
      habitat,
      colour
    } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pokemon</h1>
        </header>
        <div className="form">
          <Form fetchData={this.fetchData} handleClick={this.handleClick} />
          {this.state.error ? "Search term not valid" : ""}
        </div>
        {this.state.isLoading ? null : (
          <Content
            pokemon={pokemon}
            picture={picture}
            abilities={abilities}
            id={id}
            type={type}
            habitat={habitat}
            colour={colour}
          />
        )}
      </div>
    );
  }
}

export default App;
