import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FavoriteScreen from "../screens/FavoriteScreen";
import SFavoriteScreen from "../screens/SFavoriteScreen";
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
    <Tab.Screen name="現金匯率" component={FavoriteScreen} />
    <Tab.Screen name="即期匯率" component={SFavoriteScreen} />
  </Tab.Navigator>
  );
}
export default MyTabs;