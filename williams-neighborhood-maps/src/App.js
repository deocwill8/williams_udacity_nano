import React, { Component } from 'react';
import Map from './components/Map'
import Sidebar from './components/Sidebar'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      locations: [
        {title: 'Mother Bears Pizza', location: {lat: 39.1640807, lng: -86.51555819999999}},
        {title: 'Wells Library', location: {lat: 39.171574, lng: -86.51662399999998}},
        {title: 'School of Informatics', location: {lat: 39.172971, lng: -86.52297399999998}},
        {title: 'Eigenmann Hall', location: {lat: 39.1707441, lng: -86.50836950000001}},
        {title: 'Bears Place', location: {lat: 39.16404389999999, lng: -86.51678400000003}}
      ]
    }
  }

  showLocationMatches = (locations, query) => {
    for (let matchedLocation of this.state.locations) {
      if(matchedLocation.title.toLowerCase().includes(query.toLowerCase())){
        console.log(matchedLocation.title);
        return matchedLocation.title;
      }
    }
  }


  render() {
    return (
      <div>
          <Map  locations={this.state.locations}/>
          <Sidebar  showLocationMatches={this.showLocationMatches} locations={this.state.locations} />
      </div>
    );
  }
}

export default App;
