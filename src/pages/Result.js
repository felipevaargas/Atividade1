import { View, Text } from 'react-native'
import React from 'react'

export default function Result({ route }) {
  return (
    <View>
      <Text>teste: {route.params.paramKey}</Text>
    </View>
  )
}