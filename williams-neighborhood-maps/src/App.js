import React, { Component } from 'react';
import Map from './components/Map'
import Sidebar from './components/Sidebar'

class App extends Component {
  render() {
    return (
      <div>
          <Map/>
          <Sidebar />
      </div>
    );
  }
}

export default App;
