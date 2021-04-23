import React from 'react';
import Windows from './components/Windows';

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div id="MainSection">
        <Windows />
      </div>
    );
  }
}

export default App;
