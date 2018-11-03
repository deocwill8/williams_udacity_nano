import React, { Component } from 'react'
import LocationList from './LocationsList'

class SideBar extends Component {

    render() {
      return (
        <div id="side-bar"> 
          <LocationList 
            showLocationMatches={this.props.showLocationMatches}
            locations={this.props.locations}
            markers={this.props.markers} 
          />
        </div>
      )
    }
}

export default SideBar