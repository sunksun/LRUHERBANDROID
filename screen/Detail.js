import { View, Text } from 'react-native'
import React from 'react'

const Detail = ({navigation, route}) => {
  return (
    <View>
      <Text>{route.params.id}</Text>
      <Text>{route.params.name}</Text>
    </View>
  )
}

export default Detail