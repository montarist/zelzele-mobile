import { View, Text } from 'react-native'
import React from 'react'
import KmInfo from './KmInfo';
import TimeInfo from './TimeInfo';
import TimeDifferenceInfo from './TimeDifferenceInfo';
import DistrictInfo from './DistrictInfo';
import ProvinceInfo from './ProvinceInfo';
import MagnitudeInfo from './MagnitudeInfo';

const EarthquakeItem = (props) => {
    const { item, allData, setData, setActive } = props

    let backgroundColor;

    switch (Math.floor(+(item.magnitude))) {
        case 2:
            backgroundColor = "bg-gray-100"
            break;
        case 3:
            backgroundColor = "bg-orange-50"
            break;
        case 4:
            backgroundColor = "bg-orange-100"
            break;
        case 5:
            backgroundColor = "bg-red-50"
            break;
        case 6:
            backgroundColor = "bg-red-100"
            break;
        case 7:
            backgroundColor = "bg-red-200"
            break;
        case 8:
            backgroundColor = "bg-red-300"
            break;
        case 9:
            backgroundColor = "bg-red-400"
            break;
        default:
            backgroundColor = "bg-gray-50"
            break;
    }

    return (
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
    );
}

export default EarthquakeItem