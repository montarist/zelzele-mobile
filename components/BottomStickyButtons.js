import { View } from 'react-native'
import React from 'react'
import BottomStickyItem from './BottomStickyItem'

const BottomStickyButtons = (props) => {

    const { active, setActive, allData, setData } = props

    return (
        <View className="absolute bottom-20 z-20 w-full justify-center items-center">
            <View className="px-2 py-2 flex-row bg-white rounded-full">
                <BottomStickyItem
                    title="Tümü"
                    number={false}
                    index={0}
                    active={active}
                    allData={allData}
                    setData={setData}
                    setActive={setActive}
                />
                <BottomStickyItem
                    title="3"
                    number={true}
                    index={1}
                    active={active}
                    allData={allData}
                    setData={setData}
                    setActive={setActive}
                    magnitude={3}
                />
                <BottomStickyItem
                    title="4"
                    number={true}
                    index={2}
                    active={active}
                    allData={allData}
                    setData={setData}
                    setActive={setActive}
                    magnitude={4}
                />
                <BottomStickyItem
                    title="5"
                    number={true}
                    index={3}
                    active={active}
                    allData={allData}
                    setData={setData}
                    setActive={setActive}
                    magnitude={5}
                />
            </View>
        </View>
    )
}

export default BottomStickyButtons