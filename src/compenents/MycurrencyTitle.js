import React from "react";
import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity} from "react-native";
import { Icon } from 'react-native-elements'

import Data from "../json/HomeData.json";

const MycurrencyTitle =({})=>{
    return(
   <Image source={require('../../img/img_mycurrencytitle.png')}
          style={styles.title}/>
    )
};
const styles = StyleSheet.create({
   title:{
       width:109,
       height:26,
     
       marginTop:595,
       marginLeft:39
   }
  });
  
  export default  MycurrencyTitle;