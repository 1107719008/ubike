import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import HomeScreen from "./src/screens/HomeSrceen";
import MainTabNavigator from "./src/navigaions/MainTabNavigation";
import Topbar from "./src/navigaions/Topbar";
const App=() => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#3E4247"}}>
    <MainTabNavigator />
    </SafeAreaView>
  );
}
export default App;
