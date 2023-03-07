import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const BottomStickyItem = (props) => {

    const { active, setActive, allData, setData, title, number, index, magnitude } = props

    return (
        <TouchableOpacity
            onPress={() => {
                setActive(index)
                if (number) {
                    const filteredData = allData.filter(item => parseFloat(item.magnitude) >= magnitude)
                    setData(filteredData)
                } else {
                    setData(allData)
                }
            }}
            disabled={!allData}
            className="mr-2"
        >
            <View className={`flex-row items-center px-5 py-2 rounded-full
							${(active == index) ? "bg-zinc-700 " : "bg-zinc-100 "}
						`}>

                {number && <AntDesign name="right" size={18} color={`${(active == index) ? "#fff" : "#000"}`} />}
                <Text className={` text-lg font-bold
                    ${(active == index) ? "text-white " : "text-zinc-700 "}
                `}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>



    )
}

export default BottomStickyItem