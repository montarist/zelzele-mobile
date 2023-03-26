import { ActivityIndicator, Platform, SafeAreaView, View, StatusBar } from 'react-native';

import moment from 'moment';
import 'moment/locale/tr';

import { useEffect, useState } from 'react';
import fetchData from '../utils/fetchData';
import TodayInfo from '../components/TodayInfo';
import BottomStickyButtons from '../components/BottomStickyButtons';
import EarthquakeList from '../components/EarthquakeList';

export default function HomeScreen() {

    moment.locale('tr')
    const [data, setData] = useState(null);
    const [allData, setAllData] = useState(null);
    const [active, setActive] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData(1, setData, setAllData, setIsLoading)
    }, []);

    return (
        <SafeAreaView className="flex-1 bg-white" r>
            <StatusBar style="auto" />

            {data ? (
                <View className="flex-1 h-screen relative">
                    <BottomStickyButtons
                        active={active}
                        allData={allData}
                        setData={setData}
                        setActive={setActive}
                    />

                    <TodayInfo totalEarthquakes={data?.length} />

                    <EarthquakeList
                        allData={allData}
                        data={data}
                        setData={setData}
                        setActive={setActive}
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                    />
                </View>
            ) : (
                <View className="flex-1 justify-center items-center h-full relative">
                    <ActivityIndicator size="large" />
                </View>
            )}

        </SafeAreaView>
    );
}