import React, { Component } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      items: []
    };
  }

  onInputChange(name) {
    let items = [];
    for (var i = 0, length = pokemons.length; i < length; i++) {
      var pokemon = pokemons[i];
      if (pokemon.name.includes(name)) {
        items.push(pokemon);
        this.setState({
          items
        });
      }
    }
  }

  listItems() {
    let items = this.state.items;
    return (
      <ul>
        {items.map((item) => {
          return <CardItem name={item.name} sprite={item.sprite} />;
        })}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.onInputChange(e.target.value)}
        />
        {this.listItems()}
      </div>
    );
  }
}
