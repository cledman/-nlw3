import Leaflet from 'leaflet';
import mapMarkerImg from '../images/map-marker.svg';
import mapMarkerImg2 from '../images/abobora.png';
import { ThemeContext } from 'styled-components';

const MapIcon = Leaflet.icon({
    
    iconUrl: mapMarkerImg,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
})

export default MapIcon