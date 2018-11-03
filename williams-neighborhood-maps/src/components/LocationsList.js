import React, { Component } from 'react'
import '../index.css'

/* The tutorial located at https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm
    was used to create the Sidebar, HamburgerButton, and Location List components in 
    regards to the menu sliding in and sliding out
*/ 

class LocationsList extends Component {

  constructor(props){
    super(props)
    this.state = {
      searchQuery: ''
    }
  }
    componentDidMount(){
      //console.log('Locations List',this.props);
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
      let visibility = "hide";
      
      if(this.props.menuVisibility){
        visibility = "show";
      }

      return (
        <div id="locationListContainer" className={visibility}>
          <div>
          <input 
            onChange={(event) => this.handleChange(event.target.value)}
            type="text" 
            placeholder="Enter Search"
            className="search-input"
          />
          <button
          onMouseDown={this.props.handleMouseDown}>
          Close
          </button>
          </div>
          <ul>
            {this.props.locations.map((location) => (
              <li className="listLocations" key={location.title} onClick={() => {this.handleClick(location)}}>
                  {location.title}
              </li> 
            ))}
          </ul>
        </div>
      )
    }
}

export default LocationsList