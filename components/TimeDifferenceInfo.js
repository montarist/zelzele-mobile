import { Text } from 'react-native'
import React from 'react'
import moment from 'moment';

const TimeDifferenceInfo = ({ time }) => {
    return (
        <Text>{time && moment(time).add(3, "hour").fromNow()}</Text>
    )
}

export default TimeDifferenceInfo