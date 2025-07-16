"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// perbaiki ikon bawaan
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

export default function MapClient() {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(
      (pos) => setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (err) => console.error("Gagal mendapatkan lokasi:", err)
    );
  }, []);

  if (!coords) return <p className="text-center pt-4">Mengambil lokasi…</p>;

  return (
    <div className="h-[400px]">
      <MapContainer className="h-full w-full rounded-md" center={[coords.lat, coords.lng]} zoom={15} scrollWheelZoom>
        <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[coords.lat, coords.lng]}>
          <Popup>Lokasi kamu sekarang</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
