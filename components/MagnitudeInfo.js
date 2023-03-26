import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import colorFromMagnitude from '../utils/colorFromMagnitude'

const MagnitudeInfo = ({ magnitude }) => {

    const [magnitudeBackgroundColor, setMagnitudeBackgroundColor] = useState("")
    const [textColor, setTextColor] = useState("")

    useEffect(() => {
        const setColors = async () => {
            const { magnitudeBackgroundColor, textColor } = await colorFromMagnitude(magnitude)
            setMagnitudeBackgroundColor(magnitudeBackgroundColor)
            setTextColor(textColor)
        }
        setColors()
    }, [])

    return (
        <View className={`rounded-xl px-2 py-1 ${magnitudeBackgroundColor} min-w-[50]`}>
            <Text className={`text-2xl font-bold text-center ${textColor}`}>
                {Number.isInteger(+(magnitude)) ? (+(magnitude)).toFixed(1) : magnitude}
            </Text>
        </View>
    )
}

export default MagnitudeInfo