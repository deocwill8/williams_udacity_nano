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
      searchQuery: '',
      locationsList: this.props.locations
    }
  }
    componentDidMount(){
      //console.log('Locations List',this.props);
    } 

    handleChange = (filter) => {
      this.props.showLocationMatches(filter);
    }

    render() {
      let visibility = "show"; //figure this out //default should be hide
      
      if(this.props.menuVisibility){
        visibility = "show";
      }

      return (
        <div id="locationListContainer" 
          onMouseDown={this.props.handleMouseDown}
          className={visibility} >
          <input 
            onChange={(event) => this.handleChange(event.target.value)}
            type="text" 
            placeholder="Enter Search"
          />
          <ul>
            {this.state.locationsList.map((location) => (
              <li key={location.title}>
                  {location.title}
              </li> 
            ))}
          </ul>
        </div>
      )
    }
}

export default LocationsList