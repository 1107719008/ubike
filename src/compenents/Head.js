import React from "react";
import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity} from "react-native";
import { Icon } from 'react-native-elements'

import Data from "../json/HomeData.json";
import ModalDropdown from 'react-native-modal-dropdown';
const Head =({})=>{
    return(
      <View style={styles.all}>
        <Image style={{width:273,height:269,marginLeft:-100,marginTop:-100}}
               source={require("../../img/img_circleleft.png")}/>
               
          <View style={{flexDirection:"row"}}>
             
              <Image style={styles.bell}
                source={require("../../img/button_bell.png")}
              />
          </View>
        <View style={styles.topbox}>
          <View style={{flexDirection:"row"}}>
            <ModalDropdown options={['TWD','USD','GBP','AUD','RMB']}
                         defaultValue="TWD"
                         textStyle={{color:"white",width:46,height:22}}
                         style={{marginTop:25,marginLeft:161}}
                         dropdownStyle={{borderRadius:200}}
                      />
            <Icon name="ios-arrow-down"
                 type='ionicon'
                 color='white'
                 iconStyle={{marginTop:24,fontSize:15,marginLeft:-15}}
            />
            </View>
            <View style={{flexDirection:"row"}}>
              <Image style={{width:22.44,height:21.99,marginLeft:135}}
                  source={require('../../img/icon_money.png')}
              />
              <Text style={{width:63,height:28,fontSize:25,color:"white",marginLeft:8,marginTop:-5}}>{Data.personal[0].money}</Text>
            </View>
            <Image source={require("../../img/img_rate.png")}
                    style={{width:181,height:181,marginTop:26,marginLeft:91}}/>
            <View style={{flexDirection:"row"}}>
              <Image style={styles.usd}
                     source={require("../../img/icon_USD.png")}/>
              <Image style={styles.gbp}
                     source={require("../../img/icon_GBP.png")}/>
              <Image style={styles.gbp}
                     source={require("../../img/icon_AUD.png")}/>
              <Image style={styles.gbp}
                     source={require("../../img/icon_RMB.png")}/>

            </View>
            <Image source={require("../../img/img_circleright.png")}
                   style={{width:237,height:238,zIndex:5,marginLeft:267,opacity:0.5}}/>
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
   user:{
    width:25.85,
    height:25.94,
    marginTop:55.46,
    marginLeft:30
   },
   bell:{
     width:25.85,
     height:25.94,
     marginTop:-115,
     marginLeft:356
   },
   topbox:{
     position:"absolute",
     width:354,
     height:392,
     backgroundColor:"#383B40",
     borderRadius:30,
     marginTop:125,
     marginLeft:30,
     shadowColor: '#00000029',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowOffset: {
    height: 3,
    width: 2,
},
zIndex:2
   },
usd:{
  width:43,
  height:15,
  marginLeft:62,
  marginTop:35
},
gbp:{
  width:43,
  height:15,
  marginLeft:20,
  marginTop:35
}
  });
  
  export default Head;