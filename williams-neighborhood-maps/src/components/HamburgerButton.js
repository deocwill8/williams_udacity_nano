import React, { Component } from 'react'
import '../index.css'

/* The tutorial located at https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm
    was used to create the Sidebar, HamburgerButton, and Location List components in 
    regards to the menu sliding in and sliding out
*/ 

class HamburgerButton extends Component {
    componentDidMount(){
        //console.log('Button' ,this.props);
    } 

    render() {
      return (
          <div className="header-container">  
            <div id="menu-icon" onMouseDown={this.props.handleMouseDown}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="header-text">Neighborhood Map</div>
          </div>
      )
    }
}

export default HamburgerButton