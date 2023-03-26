import { View, Text } from 'react-native'
import React from 'react'

const KmInfo = ({ km, ...restProps }) => {
    return (
        <Text {...restProps}>{km} km</Text>
    )
}

export default KmInfo