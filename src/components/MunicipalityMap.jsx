import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MunicipalityMap({ stateName, onClose, onMunicipalityClick }) {
  const [geoData, setGeoData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (stateName === 'Santa Catarina') {
      fetch('/geojs-42-mun.json')
        .then((res) => {
          if (!res.ok) {
            throw new Error('Erro ao carregar o mapa');
          }
          return res.json();
        })
        .then((data) => setGeoData(data))
        .catch((err) => {
          console.error('Erro ao carregar GeoJSON:', err);
          setError('Não foi possível carregar o mapa de municípios.');
        });
    } else {
      setGeoData(null); // Zera o mapa se não for SC
    }
  }, [stateName]);

  const onEachFeature = (feature, layer) => {
    const name = feature.properties.NOME || feature.properties.name;
    if (name) {
      layer.on({
        click: () => onMunicipalityClick(name)
      });
      layer.bindTooltip(name, { sticky: true });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl h-[600px] relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-sm z-10"
        >
          ✖
        </button>

        {error ? (
          <div className="flex items-center justify-center h-full text-red-600 font-semibold px-6 text-center">
            {error}
          </div>
        ) : geoData ? (
          <MapContainer
            center={[-27.3, -50.9]}
            zoom={7}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%', borderRadius: '0 0 0.5rem 0.5rem' }}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON data={geoData} onEachFeature={onEachFeature} />
          </MapContainer>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-600 font-medium px-6 text-center">
            Carregando mapa de {stateName}...
          </div>
        )}
      </div>
    </div>
  );
}

export default MunicipalityMap;
