import React, { Component } from 'react'
import './hamburgerbutton.css'

/* The tutorial located at https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm
    was used to create the Sidebar, HamburgerButton, and Location List components in 
    regards to the menu sliding in and sliding out
*/ 

class HamburgerButton extends Component {
    componentDidMount(){
        console.log('Button' ,this.props)
    } 

    render() {
      return (
        <div id="button"
            onMouseDown={this.props.handleMouseDown}
        >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
      )
    }
}

export default HamburgerButton