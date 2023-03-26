import { Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import colorFromMagnitude from '../utils/colorFromMagnitude'

const DistrictInfo = ({ magnitude, district }) => {

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
        <Text className={`text-lg opacity-60 mb-1 ${textColor}`}>
            {district}
        </Text>
    )
}

export default DistrictInfo