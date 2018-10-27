import React, { Component } from 'react'
import LocationList from './LocationsList'
import HamburgerButton from './HamburgerButton'

/* The tutorial located at https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm
    was used to create the Sidebar, HamburgerButton, and Location List components in 
    regards to the menu sliding in and sliding out
*/ 

class SideBar extends Component {
  constructor(props, context){
    super(props, context)

    this.state = {
      visible: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toogleMenu = this.toogleMenu.bind(this);
  }
  
  handleMouseDown(e){
    this.toogleMenu();

    //console.log("clicked");
    //console.log(this.state.visible)
    e.stopPropagation();
  }

  toogleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  componentDidMount(){
    //console.log('sidebar' ,this.props)
  }

    render() {
      return (
        <div className="container">
          <HamburgerButton 
            handleMouseDown={this.handleMouseDown} 
          />
          <LocationList 
            showLocationMatches={this.props.showLocationMatches}
            handleMouseDown={this.handleMouseDown} 
            menuVisibility={this.state.visible}
            locations= {this.props.locations}
          />
        </div>
      )
    }
}

export default SideBar