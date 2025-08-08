import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import siteConfig from '../../const/siteConfig';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Maps.css';

const customIcon = new L.Icon({
  iconUrl: '/pin.png',
  iconSize: [56, 56],       
  iconAnchor: [28, 56],      
  popupAnchor: [0, -56],     
});

export default function Map() {
  const { lat, lng, text } = siteConfig.address;

  return (
    <div className="map-wrapper">
      <MapContainer
        center={[lat, lng]}
        zoom={18}
        scrollWheelZoom={false}
        className="map-container"
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye"
        />
        <Marker position={[lat, lng]} icon={customIcon}>
          <Popup>{text}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

