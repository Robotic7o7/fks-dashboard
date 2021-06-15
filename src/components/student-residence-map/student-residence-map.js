import React from "react";
import {
    MapContainer,
    TileLayer,
    useMapEvents,
    MapConsumer
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "./constants";
import "./student-residence-map.css";

export default function StudentResidenceMap() {
    // function MyComponent() {
    //   const map = useMapEvents({
    //     click: (e) => {
    //       const { lat, lng } = e.latlng;
    //       L.marker([lat, lng], { icon }).addTo(map);
    //     }
    //   });
    //   return null;
    // }

    return (
        <div className="map-container">
            <MapContainer
                center={[17.3, 78.5]}
                zoom={11}
                style={{ height: "100vh" }}
            // whenReady={(map) => {
            //   console.log(map);
            //   map.target.on("click", function (e) {
            //     const { lat, lng } = e.latlng;
            //     L.marker([lat, lng], { icon }).addTo(map.target);
            //   });
            // }}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapConsumer>
                    {(map) => {
                        console.log("map center:", map.getCenter());
                        map.on("click", function (e) {
                            const { lat, lng } = e.latlng;
                            L.marker([lat, lng], { icon }).addTo(map);

                        });
                        L.marker([17.3850, 78.4867], { icon }).addTo(map);
                        return null;
                    }}
                </MapConsumer>
            </MapContainer>
        </div>
    );
}
