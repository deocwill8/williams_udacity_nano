import React, { Component } from 'react'
import { createGoogleMapsInstance } from '../common.js'
import '../index.css'

/* The function located at https://stackoverflow.com/questions/48493960/using-google-map-in-react-component
    was directly taken to load the google maps api. 
*/ 

/* Concept of using a separate utlity file came from https://www.youtube.com/watch?v=5J6fs_BlVC0&feature=youtu.be
*/

class Map extends Component {
    componentDidMount(){
      console.log('Map markers' ,this.props)
      let googleMapsPromise = createGoogleMapsInstance();

      Promise.all([
        googleMapsPromise
      ])
      .then(values => {
        console.log(values);
        let google = values[0];
        let markers = [];
        let position = 
        //this.google = google;

        this.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 39.165325, lng: -86.52638569999999},
          zoom:15,
          mapTypeControl:false
        });

        // this.props.locations.forEach(location => {
        //   //make this work 
        //   let marker = new google.maps.Marker({
        //     position: position,
        //     title: title,
        //     icon: defaultIcon,
        //     animation: google.maps.Animation.DROP,
        //     id: i
        // }); 
        // })
      })
    } 

    render() {
      return (
        <div>
          <div id="map"></div>
        </div>
      )
    }
}

export default Map