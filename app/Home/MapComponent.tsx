"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix default marker issue in Leaflet for Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface LeafletMapProps {
  latitude: number;
  longitude: number;
  zoom?: number; // Optional zoom level, defaults to 13
}

export default function LeafletMap({
  latitude,
  longitude,
  zoom = 13,
}: LeafletMapProps) {
  useEffect(() => {
    // Ensures Leaflet styles are applied in Next.js
    if (typeof window !== "undefined") {
      import("leaflet/dist/leaflet.css");
    }
  }, []);

  return (
    <div className="w-full h-96">
      <MapContainer
        center={[latitude, longitude]}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            A pretty popup! <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
