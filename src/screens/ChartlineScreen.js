import React, { useContext } from "react";
import { View, FlatList,Text,ScrollView} from "react-native";
import Chart from "../compenents/Chart";
const ChartlineScreen = ({navigation}) => {
  return (
     <ScrollView>
       <View style={{flex:1}}>
          <Chart/>
       </View>
      </ScrollView> 
  );
};

export default ChartlineScreen;
