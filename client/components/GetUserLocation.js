import React from 'react'
import {geolocated} from 'react-geolocated'
import Mapbox from 'mapbox-gl'

class GetLocation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lat: null,
      lng: null,
      altitude: null,
      heading: null,
      speed: null
    }
  }

  componentWillReceiveProps(nextProps){

    this.setState({
      lat: nextProps.coords.latitude,
      lng: nextProps.coords.longitude,
      altitude: nextProps.coords.altitude,
      heading: nextProps.coords.heading,
      speed: nextProps.coords.speed
    })

  }
  render (){
    if (navigator.geolocation) {
      console.log(navigator.geolocation, 'Geolocation is supported!')

    }
    else {
      console.log('Geolocation is not supported for this Browser/OS.');
    }

    // make a marker for the user's location
    //note this has to be private information
    var el = document.createElement('div');
    el.className = 'userLocation';

    new mapboxgl.Marker(el)
    .setLngLat([this.state.lng, this.state.lat])
    .addTo(this.props.map);

    if(this.state.lng){
      this.props.map.flyTo({
        center: [this.state.lng, this.state.lat]
      });
    }

      return (
        <div/>
      )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(GetLocation);


// window.onload = function() {
//   var startPos;
//   var geoSuccess = function(position) {
//     startPos = position;
//     let lat = startPos.coords.latitude;
//     let lon = startPos.coords.longitude;
//   };
//   navigator.geolocation.getCurrentPosition(geoSuccess);



  // function getUserData (){
  //  if (navigator.geolocation) {
  //         console.log(navigator.geolocation, 'Geolocation is supported!');

  //         navigator.geolocation.getCurrentPosition(function(position) {
  //            console.log([position.coords.longitude, position.coords.latitude]);
  //         });
  //       }
  //       else {
  //         console.log('Geolocation is not supported for this Browser/OS.');
  //       }
  // }

  // module.exports = getUserData

