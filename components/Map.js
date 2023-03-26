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
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            <Marker
                isPreselected={true}
                coordinate={{ latitude: latitude, longitude: longitude }}
                title={district}
            />
        </MapView>
    )
}

export default Map