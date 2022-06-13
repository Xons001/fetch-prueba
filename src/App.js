import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response);
    })
  }

  render() {
    return (
      <div>
        Fetch
      </div>
    );
  }
}

export default App;
