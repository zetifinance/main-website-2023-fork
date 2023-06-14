import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import Text from '../components/UI/Text';
import Buttons from '../components/UI/Buttons';
import { useInView } from "react-intersection-observer";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Maps({ data }) {
    // In View
    const { ref, inView } = useInView({
        threshold: .3,
        triggerOnce: true,
    });

    // Functions
    const [geoAssets, setGeoAssets] = useState([]);

    useEffect(() => {
        fetch('https://zeti.co.uk/api/geoAssets')
            .then(response => response.json())
            .then(data => setGeoAssets(data));
    }, []);

    // Intro
    const intro_heading = data ?.intro ?.heading;
    const intro_content = data ?.intro ?.rich_editor;
    const intro_buttons = data ?.intro ?.buttons;

    // Slide List
    const maps = data ?.maps_grid;

    return (
        <section inview={inView} className={clsx('block block__maps', { 'in-view': inView })}>
            <div className="container">
                <div className="maps__intro">
                    {intro_heading && (
                        <h2 className="section-heading">{intro_heading}</h2>
                    )}

                    {intro_content && (
                        <Text className={clsx('')}>
                            {intro_content}
                        </Text>
                    )}

                    {intro_buttons && (
                        <Buttons buttons={intro_buttons} className={clsx('')} />
                    )}
                </div>

                <div className={clsx('maps__grid')}>
                    <div className="maps__map">
                        <h3>UK</h3>
                        <div>
                            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "500px", width: "100%" }}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                />
                                {/* Filter and plot UK markers */}
                                {geoAssets
                                    .filter(asset => asset.latitude > 49 && asset.latitude < 61 && asset.longitude > -11 && asset.longitude < 2)
                                    .map((asset, index) => (
                                        <Marker key={index} position={[asset.latitude, asset.longitude]}>
                                            <Popup>
                                                A pretty CSS3 popup. <br /> Easily customizable.
                                            </Popup>
                                        </Marker>
                                    ))}
                            </MapContainer>
                        </div>
                    </div>
                    <div className="maps__map">
                        <h3>USA</h3>
                        <div>
                            <MapContainer center={[37.6, -95.665]} zoom={13} style={{ height: "500px", width: "100%" }}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                />
                                {/* Filter and plot USA markers */}
                                {geoAssets
                                    .filter(asset => asset.latitude > 24.396308 && asset.latitude < 49.384358 && asset.longitude > -125.000000 && asset.longitude < -66.934570)
                                    .map((asset, index) => (
                                        <Marker key={index} position={[asset.latitude, asset.longitude]}>
                                            <Popup>
                                                A pretty CSS3 popup. <br /> Easily customizable.
                                            </Popup>
                                        </Marker>
                                    ))}
                            </MapContainer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}