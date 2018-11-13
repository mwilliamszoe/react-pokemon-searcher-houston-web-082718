import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    img: this.props.pokemon.sprites.front
  };

  toggleImg = () => {
    const { pokemon } = this.props;
    this.state.img === pokemon.sprites.front
      ? this.setState({ img: pokemon.sprites.back })
      : this.setState({ img: pokemon.sprites.front });
  };

  render() {
    const { name, stats } = this.props.pokemon;

    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" onClick={this.toggleImg} src={this.state.img} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats.map(stat => {
                if (stat.name === "hp") {
                  return stat.value;
                }
              })}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
