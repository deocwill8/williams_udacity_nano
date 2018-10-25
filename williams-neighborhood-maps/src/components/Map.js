import React, { Component } from 'react'
import { createGoogleMapsInstance } from '../common.js'
import '../index.css'

/* The function located at https://stackoverflow.com/questions/48493960/using-google-map-in-react-component
    was directly taken to load the google maps api. 
*/ 

/* Concept of using a separate utlity file came from https://www.youtube.com/watch?v=5J6fs_BlVC0&feature=youtu.be
*/
//let contentString = '<p>Hello</p>';


class Map extends Component {
  constructor(props){
    super(props)

    this.state = {
      contentString: '<p>Getting information about this marker...</p>',
      forSquareLatLngValues: ''
    }

   this.populateInfoWindow = this.populateInfoWindow.bind(this);
  }
 
    componentDidMount(){
      //console.log('markers' ,this.props)
      let googleMapsPromise = createGoogleMapsInstance();


      Promise.all([
        googleMapsPromise
      ])
      .then(values => {
        let google = values[0];

        //create infoWindow
        let infoWindow =  new google.maps.InfoWindow({
          content: this.state.contentString
        });

        // show the map with Bloomington, In as the center
        this.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 39.165325, lng: -86.52638569999999},
          zoom:15,
          mapTypeControl:false
        });

        //get the loacation markers from the props sent from App.js
        for (var location of this.props.locations) {
          let position = location.location
          let title = location.title
          this.state.forSquareLatLngValues = position.lat+","+position.lng
          
          let marker = new google.maps.Marker({
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            id: title
          }); 

          //show the map with the markers on it
          marker.setMap(this.map)

          //put information in the info window
          this.populateInfoWindow(infoWindow, this.state.forSquareLatLngValues)

          marker.addListener('click', function(){
            infoWindow.open(this.map, marker);
          })
        }
      })
    }
    
  populateInfoWindow(newInfowindow, latLngValue) {
    const CLIENT_ID = 'D2OEMHIYC1QE003UWBNP5XN0F5W4DFTILR32QV4KL3JPYOG0';
    const CLIENT_SECRET = '33OWT1QLPRX3K30JL5512ANPDLHUEW1NH4FQ4LPLLWYRYP3H';
    let FSlatLngValues = latLngValue;

    fetch(`https://api.foursquare.com/v2/venues/search?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180323&ll=${FSlatLngValues}&limit=1`)
    .then(response => {
      return response.json(); //convert it to a readable json 
    })
    .then(venueJson => {
      let venueName = venueJson.response.venues[0].name;
      console.log(venueName);
      
      //newInfowindow.setContent(`<p>Venue name: ${venueName}</p>`);
      //this.setState({contentString: venueJson.response.venues[0].name})
      console.log(newInfowindow)
    })
    .catch(error => {
       console.log(error)
    });
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