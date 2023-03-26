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

const EarthquakeItem = (props) => {
    const { item, allData, setData, setActive } = props

    const navigation = useNavigation();
    const [backgroundColor, setBackgroundColor] = useState("")

    useEffect(() => {
        const setColors = async () => {
            const { backgroundColor } = await colorFromMagnitude(item.magnitude)
            setBackgroundColor(backgroundColor)
        }
        setColors()
    }, [])

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
                            <MagnitudeInfo magnitude={item.magnitude} />
                        </View>
                        <View className="flex-col">
                            <ProvinceInfo item={item} allData={allData} setData={setData} setActive={setActive} />
                            <DistrictInfo magnitude={item.magnitude} district={item.district} />
                            <View className="flex-row items-center pl-px opacity-60">
                                <KmInfo km={item.depth} /><Text className="opacity-40 mr-1">•</Text>
                                <TimeInfo time={item.date} /><Text className="opacity-40 mr-1">•</Text>
                                <TimeDifferenceInfo time={item.date} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default EarthquakeItem