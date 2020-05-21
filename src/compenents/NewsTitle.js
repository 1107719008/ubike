import React from "react";
import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity} from "react-native";
import { Icon } from 'react-native-elements'

import Data from "../json/HomeData.json";

const NewsTitle =({})=>{
    return(
    <Text style={styles.title}>{Data.NewsTitle}</Text>
    )
};
const styles = StyleSheet.create({
   title:{
       width:73,
       height:32,
       fontSize:29,
       color:"white",
       marginTop:540,
       marginLeft:37
   }
  });
  
  export default NewsTitle;