import React, { Component } from 'react'
import '../index.css'

class LocationsList extends Component {

  constructor(props){
    super(props)
    this.state = {
      searchQuery: ''
    }
  }

    handleChange = (filter) => {
      this.props.showLocationMatches(filter);
    }

    /*
    received help from @Forrest(FEND) in the #fend_proj_7 channel, 
    he encouraged me to use find instead of filter to get the 
    selected marker 
    */
    handleClick = (location) => {
      let selectedMarker = this.props.markers.find(marker => marker.title === location.title);
      window.google.maps.event.trigger(selectedMarker, 'click');
    }

    render() {
      return (
        <section id="locationListContainer">
          <section role="group">
          <h1 className="header-text">Indiana University</h1>
          <label htmlFor="searchInput" role="list"></label>
          <input 
            onChange={(event) => this.handleChange(event.target.value)}
            type="text" 
            role="search"
            tabIndex="1"
            id="searchInput"
            placeholder="Enter Search"
            className="search-input"
          />
          </section>
          <section role="group">
          <label htmlFor="locationList"></label>
          <ul id="locationList">
            {this.props.locations.map((location) => (
              <li role="button" tabIndex="2" className="list-locations" key={location.title} onClick={(event) => {this.handleClick(location)}}>
                  {location.title}
              </li> 
            ))}
          </ul>
          </section>
          <section className="powered-by-container">
            <h1 className="powered-by-text">Powered By</h1>
            <p className="powered-by-text">Google Maps Api</p>
            <p className="powered-by-text">FourSquare Api</p>
          </section>

        </section>
      )
    }
}

export default LocationsList