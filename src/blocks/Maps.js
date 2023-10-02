import clsx from 'clsx';
import React, { useEffect, useState, Suspense } from 'react';
import Text from '../components/UI/Text';
import Buttons from '../components/UI/Buttons';
import { useInView } from 'react-intersection-observer';

import 'leaflet/dist/leaflet.css';
import iconMarker from '../../static/img/map-pin-orange.svg'

export default function Maps({ data }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Intro
  const intro_heading = data?.intro?.heading;
  const intro_content = data?.intro?.rich_editor;
  const intro_buttons = data?.intro?.buttons;

  // Maps
  const [geoAssets, setGeoAssets] = useState([]);
  const [loadMap, setLoadMap] = useState(false);
  const [MapModuleUK, setMapModuleUK] = useState(null);
  const [MapModuleUSA, setMapModuleUSA] = useState(null);
  
  
  useEffect(() => {
    fetch('https://calm-desert-086adb703.azurestaticapps.net/api/geoAssets')
      .then(response => response.json())
      .then(data => {
        setGeoAssets(data);
        setLoadMap(true);
      })
      .catch(error => {
      });
  }, []);
  
  useEffect(() => {
    if (loadMap === true) {
      if (typeof window !== 'undefined') {
        import('leaflet').then((L) => {
          const icon = L.icon({ 
            iconUrl: iconMarker, 
            iconSize: [30, 49],
            iconAnchor: [15, 49]
          });
  
          import('react-leaflet').then((leaflet) => {
            const { MapContainer, TileLayer, Marker } = leaflet;
  
            setMapModuleUK(
              <MapContainer center={[51.505, -0.09]} zoom={11} style={{ height: '500px', width: '100%' }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
    
                {/* Filter and plot UK markers */}
                {geoAssets
                  .filter(asset => asset.latitude > 49 && asset.latitude < 61 && asset.longitude > -11 && asset.longitude < 2)
                  .map((asset, index) => (
                    <Marker key={index} position={[asset.latitude, asset.longitude]} icon={icon} />
                  ))}
              </MapContainer>
            );

            setMapModuleUSA(
              <MapContainer center={[37.6, -122.2]} zoom={10} style={{ height: '500px', width: '100%' }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
    
                {/* Filter and plot UK markers */}
                {geoAssets
                  .filter(asset => asset.latitude > 24.396308 && asset.latitude < 49.384358 && asset.longitude > -125.000000 && asset.longitude < -66.934570)
                  .map((asset, index) => (
                    <Marker key={index} position={[asset.latitude, asset.longitude]} icon={icon} />
                  ))}
              </MapContainer>
            );
          });
        });
      }
    }
  }, [loadMap]);

  return (
    <section inview={inView} ref={ref} className={clsx('block block__maps', { 'in-view': inView })}>
      <div className="container">
        <div className="maps__intro">
          {intro_heading && <h2 className="section-heading">{intro_heading}</h2>}

          {intro_content && <Text className={clsx('')}>{intro_content}</Text>}

          {intro_buttons && <Buttons buttons={intro_buttons} className={clsx('')} />}
        </div>

        <div className={clsx('maps__grid')}>
          <div className="maps__map">
            <h3>UK</h3>
            {typeof window !== 'undefined' && (
              <div className="map">
                <Suspense fallback={<div>Loading map...</div>}>
                  {MapModuleUK}
                </Suspense>
              </div>
            )}
          </div>
          <div className="maps__map">
            <h3>USA</h3>
            {typeof window !== 'undefined' && (
              <div className="map">
                <Suspense fallback={<div>Loading map...</div>}>
                  {MapModuleUSA}
                </Suspense>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
