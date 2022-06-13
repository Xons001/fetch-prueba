import React, {Component} from 'react';

var url = 'https://pokeapi.co/api/v2/pokemon/ditto';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    }
  }

  componentDidMount() {
    window.fetch(url)
    .then(response =>  {
      return response.json();
    })
    .then(response => {
      this.setState({ pokemon : response})
      
    })
  }

  render() {
    console.log(this.state.pokemon);
    return (
      <div>
        Fetch
      </div>
    );
  }
}

export default App;
