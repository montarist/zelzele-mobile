import { StatusBar } from 'expo-status-bar';
import { RefreshControl, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import moment from 'moment';
import { useCallback, useEffect, useState } from 'react';

function Comp(props) {

	const { item, allData, setData } = props

	return (
		<View
			className="pt-1">
			<View className={`p-4
					${(item.magnitude >= 4) ? (item.magnitude >= 5) ? "bg-red-100 " : "bg-orange-100 " : "bg-zinc-100"} 
				`}>
				<View className="flex-row items-center gap-4">
					<View className={`rounded-xl px-2 py-1
							${(item.magnitude >= 4) ? (item.magnitude >= 5) ? "bg-red-200" : "bg-orange-200" : "bg-gray-200"} 
					`}>
						<Text className={`text-2xl font-bold
							${(item.magnitude >= 4) ? (item.magnitude >= 5) ? " text-red-900" : " text-orange-900" : " text-zinc-900"} 
						`}>
							{Number.isInteger(+(item.magnitude)) ? (+(item.magnitude)).toFixed(1) : item.magnitude}
						</Text>
					</View>
					<View className="flex-col">
						<TouchableOpacity
							className=""
							onPress={() => {
								const filteredData = allData.filter(filteredItem => filteredItem.province == item.province)
								setData(filteredData)
							}}
						>
							<Text className={`text-xl font-bold
								${(item.magnitude >= 4) ? (item.magnitude >= 5) ? " text-red-900" : " text-orange-900" : " text-zinc-900"} 
							`}>
								{item.province}
							</Text>
						</TouchableOpacity>
						<Text className={`text-lg opacity-60 mb-1
							${(item.magnitude >= 4) ? (item.magnitude >= 5) ? " text-red-900" : " text-orange-900" : " text-zinc-900"} 
						`}>
							{item.district}
						</Text>
						<View className="flex-row items-center gap-x-1 opacity-60">
							<Text>{item.depth} km</Text>
							<Text className="opacity-40">•</Text>
							<Text>{item.date && moment(item.date).format("hh:mm")}</Text>
							<Text className="opacity-40">•</Text>
							<Text>{item.date && moment(item.date).fromNow()}</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}

async function fetchData(magnitude, callback, callback2 = null) {
	const format24 = "YYYY-MM-DD HH:mm:ss"
	const date = moment()
	const end = date.format(format24)
	const start = date.subtract(1, 'day').format(format24)

	const url = new URL("https://deprem.afad.gov.tr/apiv2/event/filter")
	url.searchParams.append("start", start)
	url.searchParams.append("end", end)
	url.searchParams.append("orderby", "timedesc")
	url.searchParams.append("minmag", magnitude)

	const response = await fetch(url)
	const data = await response.json()

	console.log("eren")
	callback(data)
	if (callback2) {
		callback2(data)
	}
}

export default function App() {

	moment.locale('tr')
	const [data, setData] = useState(null);
	const [allData, setAllData] = useState(null);
	const [active, setActive] = useState(0);

	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 1000);
	}, []);

	useEffect(() => {
		fetchData(3, setData, setAllData);
	}, []);

	useEffect(() => {
		if (refreshing) {
			fetchData(3, setData);
		}
	}, [refreshing]);

	return (
		<SafeAreaView className="flex-1 bg-white">
			<View className="absolute bottom-20 z-20 w-full justify-center items-center">
				<View className="px-2 py-2 flex-row bg-white rounded-full">
					<TouchableOpacity
						onPress={() => {
							setActive(0)
							setData(allData)
						}}
						className="mr-2"
					>
						<View className={`px-5 py-2 rounded-full
							${(active == 0) ? "bg-zinc-700 " : "bg-zinc-100 "}
						`}>
							<Text className={` text-lg font-bold
								${(active == 0) ? "text-white " : "text-zinc-700 "}
							`}>Tümü</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							setActive(1)
							const filteredData = allData.filter(item => parseFloat(item.magnitude) > 4)
							setData(filteredData)
						}}
						className="mr-2"
					>
						<View className={`px-5 py-2 rounded-full
							${(active == 1) ? "bg-zinc-700 " : "bg-zinc-100 "}
						`}>
							<Text className={` text-lg font-bold
								${(active == 1) ? "text-white " : "text-zinc-700 "}
							`}>>4</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							setActive(2)
							const filteredData = allData.filter(item => parseFloat(item.magnitude) > 5)
							setData(filteredData)
						}}
						className=""
					>
						<View className={`px-5 py-2 rounded-full
							${(active == 2) ? "bg-zinc-700 " : "bg-zinc-100 "}
						`}>
							<Text className={` text-lg font-bold
								${(active == 2) ? "text-white " : "text-zinc-700 "}
							`}>>5</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
			<View className="sticky top-0 z-20 bg-white px-4 py-2 shadow">
				<View className="mx-auto max-w-screen-md">
					<Text className="font-medium uppercase opacity-80">{moment().format("LL")}</Text>
				</View>
			</View>
			<ScrollView
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				{data ? (
					<View className="pt-2">
						{data.map(item => (
							<Comp key={item.eventID} item={item} allData={allData} setData={setData} />
						))}
					</View>
				) : (
					<Text>Loading...</Text>
				)}
			</ScrollView>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}