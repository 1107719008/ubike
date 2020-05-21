import React, { useContext } from "react";
import { View, FlatList,Text,ScrollView, Button,StyleSheet } from "react-native";

import Currency from "../compenents/Currency";
import Mycurrency from "../compenents/Mycurrency";
import Data from "../json/FavoriteData.json"
import MycurrencyTitle from "../compenents/MycurrencyTitle";
import Topbar from "../navigaions/Topbar";

const FavoriteScreen = ({navigation}) => {
  
  return (
    
    <ScrollView>
        <View style={{flex:1}}>
          
            
            <Currency/>
           <MycurrencyTitle/>
           <Mycurrency/>
      
        </View>
      </ScrollView>
             
  );
};

export default FavoriteScreen;
