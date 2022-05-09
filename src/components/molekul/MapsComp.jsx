import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
const MapsComp = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBOuDPU0dMEZKWb8fOpp7g2UOzI1We8ef0"
    })

    if (!isLoaded) return <div>Loading.....</div>
    return (
        <Map />
    )
}

export { MapsComp }




const Map = () => {
    return (
        <GoogleMap className={'w-screen h-screen'} zoom={10} center={{ lat: 44, lng: -80 }}>
            <Marker />
        </GoogleMap>
    )
}

