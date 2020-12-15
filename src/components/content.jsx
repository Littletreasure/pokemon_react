import React from "react";
import "../App.css";

class Content extends React.Component {
  render() {
    const {
      pokemon,
      picture,
      type,
      id,
      abilities,
      habitat,
      colour
    } = this.props;
    return (
      <main className="main">
        <div className="content">
          <div className="nameImg">
            <p id="name">{pokemon}</p>
            <img className="image" src={picture} alt={pokemon} width="200" />
          </div>
          <div className="type">
            <p>Type: {type}</p>
            <p>Pokemon ID: {id} </p>
          </div>
          <div className="type">
            <p>Habitat: {habitat}</p>
            <p>Colour: {colour}</p>
          </div>
          <div className="abilities">
            <p>{pokemon}'s abilities are:</p>

            {abilities.map(ability => {
              return (
                <div>
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    );
  }
}
export default Content;
