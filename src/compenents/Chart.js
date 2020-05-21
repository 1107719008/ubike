import React from "react";
import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity} from "react-native";
import { Icon } from 'react-native-elements'

import Data from "../json/HomeData.json";
import ModalDropdown from 'react-native-modal-dropdown';
const Head =({})=>{
    return(
      <View style={styles.all}>
        <Image style={{width:189,height:189,marginLeft:287,marginTop:-110}}
               source={require("../../img/img_graycircle.png")}/>
 <Image style={{width:57,height:57,marginLeft:307,marginTop:-35}}
               source={require("../../img/img_circleright.png")}/>
          
       
            <ModalDropdown options={['USD','GBP','AUD','RMB']}
                         defaultValue="USD"
                         textStyle={{color:"white",width:65,height:30,fontSize:29}}
                         style={{marginTop:-32,marginLeft:168}}
                      />
            <Icon name="ios-arrow-down"
                 type='ionicon'
                 color='white'
                 iconStyle={{marginTop:-21,fontSize:15,marginLeft:65}}
            />
           <Image style={styles.topbar}
                    source={require('../../img/button_topbar.png')}
           />
          <Image style={styles.chart}
                source={require('../../img/img_chart.png')}/>
            <View style={{flexDirection:"row"}}>
                <Text style={styles.sell}>Sell</Text>
                <Text style={styles.buy}>Buy</Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <Text style={styles.sellnumber}>30.225</Text>
                <Text style={styles.buynumber}>30.145</Text>
            </View>
            <View style={{flexDirection:"row"}}>
            <Text style={styles.datetitle}>Date:</Text>
            <Text style={styles.date}>2020/04/29</Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <Image style={styles.oned}
                        source={require('../../img/btn_1d.png')}/>
                         <Image style={styles.other}
                        source={require('../../img/btn_1w.png')}/>
                         <Image style={styles.other}
                        source={require('../../img/btn_1w.png')}/>
                        <Image style={styles.other}
                        source={require('../../img/btn_selected_2m.png')}/>
                        <Image style={styles.other}
                        source={require('../../img/btn_6m.png')}/>
                        <Image style={styles.other}
                        source={require('../../img/btn_1y.png')}/>
                        
            </View>
        </View>
      
     
    )
};
const styles = StyleSheet.create({
   all:{
     position:"absolute",
     backgroundColor:"#24272C",
     height:1300,
     width:420
   },
   topbar:{
       width:158,
       height:29,
       marginLeft:128,
       marginTop:23
   },
   chart:{
       width:406,
       height:220.4,
       marginTop:32.82
   },
   sell:{
       width:26,
       height:20,
       fontSize:15,
       color:"#6F7174",
       marginTop:45.78,
       marginLeft:76
   },
   buy:{
    width:26,
    height:20,
    fontSize:15,
    color:"#6F7174",
    marginTop:45.78,
    marginLeft:145
   },
   sellnumber:{
       fontSize:31,
       color:"white",
       width:98,
       height:41,
       marginTop:5,
       marginLeft:76
   },
   buynumber:{
    fontSize:31,
    color:"white",
    width:98,
    height:41,
    marginTop:5,
    marginLeft:72
},
datetitle:{
    fontSize:15,
    width:34,
    height:20,
    color:"#6F7174",
    marginTop:34,
    marginLeft:111
},
date:{
    fontSize:24,
    width:132,
    height:32,
    color:"#88888A",
    marginTop:28,
    marginLeft:12
},
oned:{
    width:59,
    height:73,
    marginTop:50,
    marginLeft:20
},
other:{
    width:59,
    height:73,
    marginTop:50,
    marginLeft:4
}

 
  });
  
  export default Head;