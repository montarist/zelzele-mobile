import { Text } from 'react-native'
import React from 'react'
import moment from 'moment';

const TimeDifferenceInfo = ({ time, ...restProps }) => {
    return (
        <Text {...restProps}>{time && moment(time).add(3, "hour").fromNow()}</Text>
    )
}

export default TimeDifferenceInfo