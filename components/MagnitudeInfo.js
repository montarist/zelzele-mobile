import { View, Text } from 'react-native'
import React from 'react'
import colorFromMagnitude from '../utils/colorFromMagnitude'

const MagnitudeInfo = ({ magnitude }) => {

    let magnitudeBackgroundColor;
    let textColor;

    switch (Math.floor(+(magnitude))) {
        case 2:
            magnitudeBackgroundColor = "bg-gray-300"
            textColor = "text-gray-900"
            break;
        case 3:
            magnitudeBackgroundColor = "bg-orange-100"
            textColor = "text-orange-900"
            break;
        case 4:
            magnitudeBackgroundColor = "bg-orange-200"
            textColor = "text-orange-900"
            break;
        case 5:
            magnitudeBackgroundColor = "bg-red-200"
            textColor = "text-red-900"
            break;
        case 6:
            magnitudeBackgroundColor = "bg-red-300"
            textColor = "text-red-900"
            break;
        case 7:
            magnitudeBackgroundColor = "bg-red-400"
            textColor = "text-red-900"
            break;
        case 8:
            magnitudeBackgroundColor = "bg-red-500"
            textColor = "text-red-900"
            break;
        case 9:
            magnitudeBackgroundColor = "bg-red-600"
            textColor = "text-red-900"
            break;
        default:
            magnitudeBackgroundColor = "bg-gray-200"
            textColor = "text-gray-900"
            break;
    }

    return (
        <View className={`rounded-xl px-2 py-1 ${magnitudeBackgroundColor} min-w-[50]`}>
            <Text className={`text-2xl font-bold text-center ${textColor}`}>
                {Number.isInteger(+(magnitude)) ? (+(magnitude)).toFixed(1) : magnitude}
            </Text>
        </View>
    )
}

export default MagnitudeInfo