import { View, Text } from 'react-native'
import React from 'react'
import moment from 'moment';

const TimeInfo = ({ time }) => {
    return (
        <Text>{time && moment(time).add(3, "hour").format("HH:mm")}</Text>
    )
}

export default TimeInfo