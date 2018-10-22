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
      let googleMapsPromise = createGoogleMapsInstance();

      Promise.all([
        googleMapsPromise
      ])
      .then(values => {
        console.log(values);
        let google = values[0];
        //this.google = google;

        this.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7413549, lng: -73.9980244},
          zoom:13,
          mapTypeControl:false
        });
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