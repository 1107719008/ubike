import React, { useContext } from "react";
import { View, FlatList,Text,SafeAreaView,ScrollView} from "react-native";
import Calculator from '../compenents/Calculator';
import Currency from "../compenents/Currency";
import Mycurrency from "../compenents/Mycurrency";
import Data from "../json/FavoriteData.json"
import MycurrencyTitle from "../compenents/MycurrencyTitle";
const CaculatorScreen = ({navigation}) => {
  return (
     <ScrollView style={{flex:1}}>
      <View style={{height:1000}}>
      <Calculator/>
       </View>
       </ScrollView>     
  );
};

export default CaculatorScreen;
