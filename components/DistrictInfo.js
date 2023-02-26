import { View, Text } from 'react-native'
import React from 'react'

const DistrictInfo = ({ magnitude, district }) => {
    return (
        <Text className={`text-lg opacity-60 mb-1
							${(magnitude >= 4) ? (magnitude >= 5) ? " text-red-900" : " text-orange-900" : " text-zinc-900"} 
						`}>
            {district}
        </Text>
    )
}

export default DistrictInfo