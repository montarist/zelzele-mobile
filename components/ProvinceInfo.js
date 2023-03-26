import { Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import colorFromMagnitude from '../utils/colorFromMagnitude'

const ProvinceInfo = (props) => {

    const { item, allData, setData, setActive } = props

    const [textColor, setTextColor] = useState("")

    useEffect(() => {
        const setColors = async () => {
            const { textColor } = await colorFromMagnitude(item?.magnitude)
            setTextColor(textColor)
        }
        setColors()
    }, [])

    return (
        <TouchableOpacity
            onPress={() => {
                setActive(0)
                const filteredData = allData.filter(filteredItem => filteredItem.province == item?.province)
                setData(filteredData)
            }}
        >
            <Text className={`text-xl font-bold ${textColor}`}>
                {item?.province ? item?.province : item?.location}
            </Text>
        </TouchableOpacity>
    )
}

export default ProvinceInfo