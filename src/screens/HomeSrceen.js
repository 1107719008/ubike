import React, { useContext } from "react";
import { View, FlatList ,ScrollView,StyleSheet,style,SafeAreaView} from "react-native";
import Head from "../compenents/Head";
import News from "../compenents/News";
import Data from "../json/HomeData.json"
import NewsTitle from "../compenents/NewsTitle";
const HomeScreen = ({navigation}) => {
  return (
    
     <ScrollView>
       <View style={{flex:1}}>
        
        <Head/>
        <NewsTitle/>
        <FlatList
          data={Data.News}
          renderItem={({item})=>
          
          <News
            Data={item}
            navigation={navigation}
            />}
            keyExtractor={item => item.title}
          />
      </View>
      </ScrollView>
      
  );
};

export default HomeScreen;
