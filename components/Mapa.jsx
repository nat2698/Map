import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { CoorContext } from '../context/coorContext';
import { useContext } from 'react';

const containerStyle = {
  width: '80%',
  height: '400px',
};

function MyComponent() {

  const { coord } = useContext(CoorContext);

  const center = {
    lat: parseFloat(coord.latitud),
    lng: parseFloat(coord.longitud),
  };


  return (
    <LoadScript
      googleMapsApiKey="AIzaSyC-iy9TOFFiZZmnGlDpLg4l96c2-abh-r8"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}

      >
      <Marker position={center} />

      <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)