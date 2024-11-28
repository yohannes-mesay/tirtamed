"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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
  zoom?: number;
}

export default function LeafletMap({
  latitude,
  longitude,
  zoom = 13,
}: LeafletMapProps) {
  const mapRef = useRef<L.Map | null>(null); // Reference to the map instance

  useEffect(() => {
    // Cleanup any existing map instance
    if (mapRef.current) {
      mapRef.current.off();
      mapRef.current.remove();
      mapRef.current = null;
    }

    // Initialize the map
    const map = L.map("map-container", {
      center: [latitude, longitude],
      zoom,
      scrollWheelZoom: false,
    });

    // Set the tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker
    L.marker([latitude, longitude]).addTo(map).bindPopup("A pretty popup!");

    // Store the map instance in the ref
    mapRef.current = map;

    // Cleanup function
    return () => {
      if (mapRef.current) {
        mapRef.current.off();
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [latitude, longitude, zoom]);

  return <div id="map-container" className="w-full h-96" />;
}
