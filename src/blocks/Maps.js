import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import Text from '../components/UI/Text';
import Buttons from '../components/UI/Buttons';
import { useInView } from 'react-intersection-observer';
import NoSSR from 'react-no-ssr';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default function Maps({ data }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [MapContainer, setMapContainer] = useState(null);

  useEffect(() => {
    import('react-leaflet').then((module) => {
      setMapContainer(module.MapContainer);
    });
  }, []);

  useEffect(() => {
    const L = require('leaflet');
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
      iconUrl: require('leaflet/dist/images/marker-icon.png').default,
      shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
    });

    // fetch('https://zeti.co.uk/api/geoAssets').then(response => response.json()).then(data => setGeoAssets(data));
  }, []);

  // Intro
  const intro_heading = data?.intro?.heading;
  const intro_content = data?.intro?.rich_editor;
  const intro_buttons = data?.intro?.buttons;

  // Slide List
  const maps = data?.maps_grid;

  return (
    <section inview={inView} className={clsx('block block__maps', { 'in-view': inView })}>
      <div className="container">
        <div className="maps__intro">
          {intro_heading && <h2 className="section-heading">{intro_heading}</h2>}

          {intro_content && <Text className={clsx('')}>{intro_content}</Text>}

          {intro_buttons && <Buttons buttons={intro_buttons} className={clsx('')} />}
        </div>

        <div className={clsx('maps__grid')}>
          <div className="maps__map">
            <h3>UK</h3>
            <NoSSR>
              {MapContainer && (
                <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '500px', width: '100%' }} scrollWheelZoom={false}>
                  <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[51.505, -0.09]} />
                </MapContainer>
              )}
            </NoSSR>
          </div>
          <div className="maps__map">
            <h3>USA</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
