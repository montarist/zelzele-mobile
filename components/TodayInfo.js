import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TodayInfo = ({ fromSingle, totalEarthquakes = 0 }) => {

    const navigation = useNavigation();

    return (
        <View className="sticky top-0 z-20 bg-white px-4 py-4 shadow-md flex-row items-center">
            <View className="flex-1">
                <Text className="text-lg uppercase opacity-80">{moment().format("LL")}</Text>
            </View>
            {totalEarthquakes ? (<View className="">
                <Text className="text-base font-semibold text-gray-500">Toplam: {totalEarthquakes} deprem</Text>
            </View>) : (fromSingle ? (
                (
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="flex-row items-center gap-1"
                    >
                        <Ionicons name="arrow-back" size={24} color="black" />
                        <Text className="font-semibold text-base">Geri Dön</Text>
                    </TouchableOpacity>
                )
            ) : null)}
        </View >
    )
}

export default TodayInfo