import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ProvinceInfo = (props) => {

    const { item, allData, setData, setActive } = props

    return (
        <TouchableOpacity
            className=""
            onPress={() => {
                setActive(0)
                const filteredData = allData.filter(filteredItem => filteredItem.province == item.province)
                setData(filteredData)
            }}
        >
            <Text className={`text-xl font-bold
								${(item.magnitude >= 4) ? (item.magnitude >= 5) ? " text-red-900" : " text-orange-900" : " text-zinc-900"} 
							`}>
                {item.province ? item.province : item.location}
            </Text>
        </TouchableOpacity>
    )
}

export default ProvinceInfo