import React, { Component } from 'react'
import { createGoogleMapsInstance } from '../common.js'
import '../index.css'

/* The function located at https://stackoverflow.com/questions/48493960/using-google-map-in-react-component
    was directly taken to load the google maps api. 
*/ 

/* Concept of using a separate utlity file came from https://www.youtube.com/watch?v=5J6fs_BlVC0&feature=youtu.be
*/


class Map extends Component {
  constructor(props){
    super(props)

    this.state = {
      forSquareLatLngValues: ''
    }

   this.populateInfoWindow = this.populateInfoWindow.bind(this);
  }
 
    componentDidMount(){
      //console.log('markers' ,this.props);
      let googleMapsPromise = createGoogleMapsInstance();

      googleMapsPromise.then(values => {
        let google = values;

        // show the map with Bloomington, In as the center
        this.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 39.171574, lng: -86.51662399999998},
          zoom:15,
          mapTypeControl:false
        });

        //create infoWindow
        let infoWindow = new google.maps.InfoWindow();

        //get the loacation markers from the props sent from App.js
        for (let location of this.props.locations) {
          let position = location.location;
          let title = location.title;
          this.setState({ forSquareLatLngValues : position.lat+","+position.lng });

          let marker = new google.maps.Marker({
            position: position,
            map: this.map,
            title: title,
            animation: google.maps.Animation.DROP,
            id: title
          }); 


          //push original markers to a list
          this.props.markers.push(marker);

          //show the map with the markers on it
          infoWindow.setContent("<p>loading</p>");

          //put information in the info window
          //this.populateInfoWindow(infoWindow, this.state.forSquareLatLngValues)

          marker.addListener('click', function(){
            infoWindow.open(this.map, marker);
            if (marker.getAnimation() !== null) {
              marker.setAnimation(null);
            } else {
              marker.setAnimation(window.google.maps.Animation.BOUNCE);
              window.setTimeout(() => {
                marker.setAnimation(null);
              }, 2000)
            }
          })
        }
        this.props.updateMarkers(this.props.markers, this.props.queryString);
      })
    }
 
  populateInfoWindow(infowindow, latLngValue) {
    const CLIENT_ID = 'D2OEMHIYC1QE003UWBNP5XN0F5W4DFTILR32QV4KL3JPYOG0';
    const CLIENT_SECRET = '33OWT1QLPRX3K30JL5512ANPDLHUEW1NH4FQ4LPLLWYRYP3H';
    let FSlatLngValues = latLngValue;

    fetch(`https://api.foursquare.com/v2/venues/search?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180323&ll=${FSlatLngValues}&limit=1`)
    .then(response => {
      return response.json(); //convert it to a readable json 
    })
    .then(venueJson => {
      var venueName = venueJson.response.venues[0].name;
      infowindow.setContent(venueName); 
    })
    .catch(error => {
      infowindow.setContent("Could not get data from Foursquare Api"); 
    });
  }

    render() {
      return (
        <section>
          <label for="map"></label>
          <div id="map" role="application" id="map"></div>
        </section>
      )
    }
}

export default Map