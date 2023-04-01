import { View, Text } from 'react-native'
import React from 'react'
import config from './config'

const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 28, marginVertical: 30, fontWeight: "bold", color: "black", textAlign: 'center' }}>React Native Dotenv</Text>
      <Text style={{ fontSize: 22, color: 'black' }}>{config.API_KEY}</Text>
      <Text style={{ fontSize: 22, color: 'black' }}>{config.AUTH_TOKEN}</Text>
    </View>
  )
}

export default App