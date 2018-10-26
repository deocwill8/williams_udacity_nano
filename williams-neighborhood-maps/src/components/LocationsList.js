import React, { Component } from 'react'
import '../index.css'

/* The tutorial located at https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm
    was used to create the Sidebar, HamburgerButton, and Location List components in 
    regards to the menu sliding in and sliding out
*/ 

class LocationsList extends Component {
    componentDidMount(){
      console.log('Locations List' ,this.props)
    } 

    render() {
      let visibility = "hide";
      
      if(this.props.menuVisibility){
        visibility = "show";
      }

      return (
        <div id="locationListContainer"
          onMouseDown={this.props.handleMouseDown}
          className={visibility}
        >
          <input type="text" 
            placeholder="Enter Search"
          />
          <button
            className="filter-button"
          >Filter
          </button>
          <ol>
            {this.props.locations.map((location) => (
              <li key={location.title}>
                  {location.title}
              </li> 
            ))}
          </ol>
        </div>
      )
    }
}

export default LocationsList