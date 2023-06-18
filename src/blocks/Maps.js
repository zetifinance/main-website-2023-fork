import clsx from 'clsx';
import React, { useEffect, useState, Suspense } from 'react';
import Text from '../components/UI/Text';
import Buttons from '../components/UI/Buttons';
import { useInView } from 'react-intersection-observer';

import 'leaflet/dist/leaflet.css';

export default function Maps({ data }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Intro
  const intro_heading = data?.intro?.heading;
  const intro_content = data?.intro?.rich_editor;
  const intro_buttons = data?.intro?.buttons;

  // Slide List
  const maps = data?.maps_grid;

  const [loadMap, setLoadMap] = useState(false);
  const [MapModule, setMapModule] = useState(null);
  const [geoAssets, setGeoAssets] = useState([]);
  
  useEffect(() => {
    fetch('https://zeti.co.uk/api/geoAssets')
      .then(response => response.json())
      .then(data => {
        setGeoAssets(data);
        setLoadMap(true);
      });
  }, []);
  
  useEffect(() => {
    if (loadMap === true) {
      if (typeof window !== 'undefined') {
        import('react-leaflet').then((leaflet) => {
          const { MapContainer, TileLayer, Marker } = leaflet;

          delete leaflet.Icon.Default.prototype._getIconUrl;

          leaflet.Icon.Default.mergeOptions({
              iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
              iconUrl: require('leaflet/dist/images/marker-icon.png'),
              shadowUrl: require('leaflet/dist/images/marker-shadow.png')
          });
          
          setMapModule(
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '500px', width: '100%' }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[51.505, -0.09]} />
  
              {/* Filter and plot UK markers */}
              {geoAssets
                .filter(asset => asset.latitude > 49 && asset.latitude < 61 && asset.longitude > -11 && asset.longitude < 2)
                .map((asset, index) => (
                  <Marker key={index} position={[asset.latitude, asset.longitude]} />
                ))}
            </MapContainer>
          );
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
                  {MapModule}
                </Suspense>
              </div>
            )}
          </div>
          <div className="maps__map">
            <h3>USA</h3>
          </div>
        </div>
      </div>
    </section>
  );
}