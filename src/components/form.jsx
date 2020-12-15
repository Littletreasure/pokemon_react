import React from "react";
import "../App.css";

class Form extends React.Component {
  state = {
    pokemon: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ pokemon: "" });
    this.props.fetchData(this.state.pokemon);
  };
  handleChange = event => {
    this.setState({ pokemon: event.target.value });
  };
  onClick = event => {
    this.props.handleClick();
  };
  render() {
    return (
      <div className="input">
        <form onSubmit={this.handleSubmit}>
          <label>
            Please enter a Pokemon name:
            <input
              type="text"
              value={this.state.pokemon}
              onChange={this.handleChange}
            ></input>
            <button type="submit">Pick me!</button>
          </label>
        </form>
        <div>
          <button className="reset" onClick={this.onClick}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
