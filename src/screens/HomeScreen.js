import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'

export default function HomeScreen(props) {

  const { navigation } = props;

  const goToPage = () => {
    navigation.navigate("Settings")
  }

  return (
    <View>
      <Text> Estamos en HomeScreen</Text>
      <Button onPress={goToPage} title="Ir a ajustes"></Button>
    </View>
  )
}