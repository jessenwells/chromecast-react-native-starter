import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { CastButton } from 'react-native-google-cast'
import store from './store'
export default function App() {
 return (
  <View style={styles.container}>
   <StatusBar backgroundColor='tomato' />
   <CastButton style={styles.button} />
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 },
 button: {
  tintColor: 'tomato',
 },
})
