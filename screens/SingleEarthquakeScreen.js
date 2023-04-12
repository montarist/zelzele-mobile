import { View, Text, Platform, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import TodayInfo from '../components/TodayInfo';
import KmInfo from '../components/KmInfo';
import TimeInfo from '../components/TimeInfo';
import TimeDifferenceInfo from '../components/TimeDifferenceInfo';
import colorFromMagnitude from '../utils/colorFromMagnitude';
import Map from '../components/Map';

const SingleEarthquakeScreen = ({ route, navigation }) => {
    const { item } = route.params;

    const [backgroundColor, setBackgroundColor] = useState("")
    const [magnitudeBackgroundColor, setMagnitudeBackgroundColor] = useState("")
    const [textColor, setTextColor] = useState("")

    useEffect(() => {
        const setColors = async () => {
            const { backgroundColor, magnitudeBackgroundColor, textColor } = await colorFromMagnitude(item.magnitude)
            setBackgroundColor(backgroundColor)
            setMagnitudeBackgroundColor(magnitudeBackgroundColor)
            setTextColor(textColor)
        }
        setColors()
    }, [])

    return (
        <SafeAreaView className={`flex-1 ${backgroundColor}`}>
            <StatusBar style="auto" />

            <TodayInfo fromSingle={true} totalEarthquakes={item?.length} />

            <ScrollView>

                <View className="flex-1">
                    <View className="">
                        <Map latitude={item.latitude} longitude={item.longitude} district={item.district} />
                    </View>
                    <View className={`flex-1 p-4 ${backgroundColor}`}>
                        <View className={`mr-4 rounded-xl pt-4 pb-2 w-full ${magnitudeBackgroundColor}`}>
                            <Text className={`text-6xl font-bold text-center ${textColor}`}>
                                {Number.isInteger(+(item.magnitude)) ? (+(item.magnitude)).toFixed(1) : item.magnitude}
                            </Text>
                        </View>
                        <View className="flex-col mt-4">
                            <Text className={`${textColor} text-4xl font-semibold`}>
                                {item.province ? item.province : item.location}
                            </Text>
                            <View className="flex-row gap-2 mt-px">
                                <Text className={`${textColor} text-xl`}>{item?.district}</Text>
                                {item.neighborhood && (
                                    <Text className={`${textColor} text-xl`}>- {item.neighborhood}</Text>
                                )}
                            </View>

                            <View className="flex-row items-center mt-2 pl-px opacity-60">
                                <KmInfo className="text-xl" km={item.depth} /><Text className="text-xl opacity-40 mx-1">•</Text>
                                <TimeInfo className="text-xl" time={item.date} /><Text className="text-xl opacity-40 mx-1">•</Text>
                                <TimeDifferenceInfo className="text-xl" time={item.date} />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>

    )
}

export default SingleEarthquakeScreen