import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import mainIcon from "../Images/markerIcon.png";

import useStyles from "../Styles";

const Map = ({ position, IPData }) => {
  const classes = useStyles();
  return (
    <MapContainer
      className={classes.map}
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={position}
        icon={
          new Icon({
            iconUrl: mainIcon,
            iconSize: [30, 35],
            popupAnchor: [0, -13],
          })
        }
      >
        <Popup>{IPData.ip}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
