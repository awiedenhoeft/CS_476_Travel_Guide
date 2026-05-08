import "../styles.css";

import "leaflet/dist/leaflet.css";
import { MapContainer , Marker, TileLayer, Popup} from "react-leaflet";
import data from "../sample-markers.json" with {type : "json"};
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Link } from "react-router-dom";

export default function Map() {
    const markers = data;
    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/128/14090/14090313.png",
        iconSize: [38,38]
    });

    const createCustomClusterIcon = (cluster) => {
        return new divIcon({
            html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
            className: "customer-marker-cluster",
            iconSize: point(33,33, true)
        })   
    }
    
    return (
        <MapContainer center={([44.5618,-123.2823 ])} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url= "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            <MarkerClusterGroup
                chunkedLoading
                iconCreateFunction={createCustomClusterIcon}
            >
                {markers.map(marker => (
                    <Marker
                        key ={marker.id}
                        position={marker.coordinates}
                        icon={customIcon}>
                        <Popup>
                            <h2>{marker.experience}</h2>
                            <h3>{marker.avg_reviews}</h3>
                        </Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>
    </MapContainer>
    );
}