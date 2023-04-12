import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import KmInfo from './KmInfo';
import TimeInfo from './TimeInfo';
import TimeDifferenceInfo from './TimeDifferenceInfo';
import DistrictInfo from './DistrictInfo';
import ProvinceInfo from './ProvinceInfo';
import MagnitudeInfo from './MagnitudeInfo';
import { useNavigation } from '@react-navigation/native';
import colorFromMagnitude from '../utils/colorFromMagnitude';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EarthquakeItem = (props) => {
    const { item, allData, setData, setActive } = props

    const navigation = useNavigation();

    let magnitudeBackgroundColor;
    let backgroundColor;
    let textColor;

    switch (Math.floor(+(item.magnitude))) {
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
        <TouchableOpacity
            onPress={() => navigation.navigate('SingleEarthquake', {
                item: item
            })}
        >
            <View className="pt-1">
                <View className={`p-4 ${backgroundColor}`}>
                    <View className="flex-row items-center gap-4">
                        <View>
                            <MagnitudeInfo magnitude={item?.magnitude} />
                        </View>
                        <View className="flex-col flex-1">
                            <ProvinceInfo item={item} allData={allData} setData={setData} setActive={setActive} />
                            <DistrictInfo magnitude={item?.magnitude} district={item?.district} />
                            <View className="flex-row items-center pl-px opacity-60">
                                <KmInfo km={item?.depth} /><Text className="opacity-40 mr-1">•</Text>
                                <TimeInfo time={item?.date} /><Text className="opacity-40 mr-1">•</Text>
                                <TimeDifferenceInfo time={item?.date} />
                            </View>
                        </View>
                        <View className={`items-center rounded-xl px-2 py-2 ${magnitudeBackgroundColor} min-w-[50]`}>
                            <Ionicons name="arrow-forward" size={24} color="black" />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default EarthquakeItem