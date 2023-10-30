// import text e view para uma tela sobre o aplicativo
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
// função que retorna uma tela sobre o aplicativo
export default function ProfileScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Profile Screen</Text>

    </View >
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   }
// })