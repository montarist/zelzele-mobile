import { View, Text } from 'react-native'
import React from 'react'
import moment from 'moment'

const TodayInfo = ({ totalEarthquakes = 0 }) => {
    return (
        <View className="sticky top-0 z-20 bg-white px-4 py-4 shadow-md flex-row items-center">
            <View className="flex-1">
                <Text className="text-lg uppercase opacity-80">{moment().format("LL")}</Text>
            </View>
            {totalEarthquakes ? (<View className="">
                <Text className="text-base font-semibold text-gray-500">Toplam: {totalEarthquakes} deprem</Text>
            </View>) : null}

        </View >
    )
}

export default TodayInfo