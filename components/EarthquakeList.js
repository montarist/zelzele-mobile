import { View, Text, RefreshControl, FlatList } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import fetchData from '../utils/fetchData';
import EarthquakeItem from './EarthquakeItem';

const EarthquakeList = (props) => {

    const { allData, data, setData, setActive, isLoading, setIsLoading } = props

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setIsLoading(true);
        setTimeout(() => {
            setActive(0)
            setRefreshing(false);
            setIsLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        if (refreshing) {
            fetchData(1, setData, null, setIsLoading);
        }
    }, [refreshing]);

    return (
        <>
            {isLoading && (
                <View className="items-center justify-center mt-6 pb-4 border-b-4 border-zinc-200">
                    <Text className="text-lg font-semibold text-red-400">Son 100 güncel deprem yükleniyor...</Text>
                </View>
            )}
            <FlatList
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                ListEmptyComponent={!isLoading && (<View className="items-center justify-center mt-6 pb-4 border-b-4 border-zinc-200">
                    <Text className="text-lg font-semibold text-red-400">Bu büyüklükte bir deprem gerçekleşmedi.</Text>
                </View>)}
                data={data}
                renderItem={({ item }) => <EarthquakeItem item={item} allData={allData} setData={setData} setActive={setActive} />}
                keyExtractor={item => item.eventID}
            />
        </>
    )
}

export default EarthquakeList