const { Marker } = require("mapbox-gl");

const iconURLs = {
  subwayStops: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Yellow_icon.svg/1024px-Yellow_icon.svg.png",
  userLocation: "https://i1.wp.com/www.gatewaytire.net/wp-content/uploads/2017/03/location.png",
  trainDelay: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/BSicon_SUBWAY-CHN.svg/2000px-BSicon_SUBWAY-CHN.svg.png"
};

const buildMarker = (type, coords) => {
  if (!iconURLs.hasOwnProperty(type)) {
    type = "subwayStops";
  }
  const markerEl = document.createElement("div");
  markerEl.style.backgroundSize = "cover";
  markerEl.style.width = "10px";
  markerEl.style.height = "10px";
  markerEl.style.backgroundImage = `url(${iconURLs[type]})`;
  return new Marker(markerEl).setLngLat(coords);
};

module.exports = buildMarker;

// background-image: url('icons8-round-50.png');
// background-size: cover;
// width: 10px;
// height: 10px;
// border-radius: 50%;
// cursor: pointer;
// }
