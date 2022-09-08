const { Component } = require('react');

class Basket extends Component {
  state = { apple: 1, water: 1, candy: 1 };

  onChangeCount = event => {
    const name = event.target.name;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    console.log(this.state);
    return (
      <>
        <button type="button" name="apple" onClick={this.onChangeCount}>
          Apple
        </button>
        <button type="button" name="water" onClick={this.onChangeCount}>
          Water
        </button>
        <button type="button" name="candy" onClick={this.onChangeCount}>
          Candy
        </button>
        <ul>
          <li> Apple: {this.state.apple}</li>
          <li> Water: {this.state.water}</li>
          <li> Candy: {this.state.candy}</li>
        </ul>
      </>
    );
  }
}

export default Basket;
