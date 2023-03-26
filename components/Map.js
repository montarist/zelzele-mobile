import { View, Text } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';

const Map = ({ latitude, longitude, district }) => {
    return (
        <MapView
            style={{
                width: '100%',
                height: 350,
            }}
            initialRegion={{
                latitude: parseFloat(latitude),
                longitude: parseFloat(longitude),
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            <Marker
                isPreselected={true}
                coordinate={{
                    latitude: parseFloat(latitude),
                    longitude: parseFloat(longitude),
                }}
                title={district}
            />
        </MapView>
    )
}

export default Map