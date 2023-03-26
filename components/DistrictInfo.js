import { Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import colorFromMagnitude from '../utils/colorFromMagnitude'

const DistrictInfo = ({ magnitude, district }) => {

    let magnitudeBackgroundColor;
    let backgroundColor;
    let textColor;

    switch (Math.floor(+(magnitude))) {
        case 1:
            backgroundColor = "bg-gray-100"
            magnitudeBackgroundColor = "bg-gray-200"
            textColor = "text-gray-900"
            break;
        case 2:
            backgroundColor = "bg-gray-200"
            magnitudeBackgroundColor = "bg-gray-300"
            textColor = "text-gray-900"
            break;
        case 3:
            backgroundColor = "bg-orange-100"
            magnitudeBackgroundColor = "bg-orange-200"
            textColor = "text-orange-900"
            break;
        case 4:
            backgroundColor = "bg-orange-200"
            magnitudeBackgroundColor = "bg-orange-300"
            textColor = "text-orange-900"
            break;
        case 5:
            backgroundColor = "bg-red-100"
            magnitudeBackgroundColor = "bg-red-200"
            textColor = "text-red-900"
            break;
        case 6:
            backgroundColor = "bg-red-100"
            magnitudeBackgroundColor = "bg-red-300"
            textColor = "text-red-900"
            break;
        case 7:
            backgroundColor = "bg-red-200"
            magnitudeBackgroundColor = "bg-red-400"
            textColor = "text-red-900"
            break;
        case 8:
            backgroundColor = "bg-red-300"
            magnitudeBackgroundColor = "bg-red-500"
            textColor = "text-red-900"
            break;
        case 9:
            backgroundColor = "bg-red-400"
            magnitudeBackgroundColor = "bg-red-600"
            textColor = "text-red-900"
            break;
        default:
            backgroundColor = "bg-zinc-100"
            magnitudeBackgroundColor = "bg-gray-200"
            textColor = "text-gray-900"
            break;
    }

    return (
        <Text className={`text-lg opacity-60 mb-1 ${textColor}`}>
            {district}
        </Text>
    )
}

export default DistrictInfo