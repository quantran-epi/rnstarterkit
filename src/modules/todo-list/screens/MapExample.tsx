import { Container } from '@components/container'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'

export const MapExample = () => {
    const markers = [
        {
            title: "Marker 1",
            latlong: { longitude: 105.823661, latitude: 21.023435 }
        },
        {
            title: "Marker 2",
            latlong: { longitude: 105.825198, latitude: 21.013273 }
        },
        {
            title: "Marker 3",
            latlong: { longitude: 105.843781, latitude: 21.021109 }
        },
        {
            title: "Marker 4",
            latlong: { longitude: 105.794679, latitude: 20.906650 }
        }
    ]

    return (
        <Container>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 21.0227387,
                    longitude: 105.8194541,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {markers.map((marker, index) =>
                    <Marker key={index} coordinate={marker.latlong} title={marker.title} />)}
            </MapView>
        </Container>
    )
}