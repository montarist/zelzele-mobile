import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ProvinceInfo = (props) => {

    const { item, allData, setData, setActive } = props

    let textColor;

    switch (Math.floor(+(item.magnitude))) {
        case 1:
            textColor = "text-gray-900"
            break;
        case 2:
            textColor = "text-gray-900"
            break;
        case 3:
            textColor = "text-orange-900"
            break;
        case 4:
            textColor = "text-orange-900"
            break;
        case 5:
            textColor = "text-red-900"
            break;
        case 6:
            textColor = "text-red-900"
            break;
        case 7:
            textColor = "text-red-900"
            break;
        case 8:
            textColor = "text-red-900"
            break;
        case 9:
            textColor = "text-red-900"
            break;
        default:
            textColor = "text-gray-900"
            break;
    }

    return (
        <TouchableOpacity
            onPress={() => {
                setActive(0)
                const filteredData = allData.filter(filteredItem => filteredItem.province == item.province)
                setData(filteredData)
            }}
        >
            <Text className={`text-xl font-bold ${textColor}`}>
                {item.province ? item.province : item.location}
            </Text>
        </TouchableOpacity>
    )
}

export default ProvinceInfo