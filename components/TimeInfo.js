import { View, Text } from 'react-native'
import React from 'react'
import moment from 'moment';

const TimeInfo = ({ time }) => {
    return (
        <Text>{time && moment(time).format("hh:mm")}</Text>
    )
}

export default TimeInfo