import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
const containerStyle = {
  width: '80%',
  height: '400px'
};

const center = {  
  lat: -1.5789429731289664,
  lng: -78.76216340638618
};  
const position = {
  lat: -1.5789429731289664,
  lng: -78.76216340638618
};


export const MapsScreen = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyASNtQFmIRCkOjtUTRnIDw-ApBxG2o2Sdo"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = marker => {
    console.log('marker: ', marker)
  }
  

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        // onLoad={onLoad}
        onUnmount={onUnmount}
      >
          <Marker
            onLoad={onLoad}
            position={position}
            />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}
