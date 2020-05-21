import React,{useState} from "react";
import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity,Button} from "react-native";
import Data from "../json/FavoriteData.json" ;
const Currency =({})=>{
    show=()=>{
        const bool=this.state.show;
        this.setState({ show: !bool});
      }
      const [count,setCount]=useState(0);
    
    if(count%2==0){
        return(
            
           <View style={styles.all}>
               <Image source={require('../../img/img_graycircle.png')}
               style={styles.bigcircle}
               />
               <Image source={require('../../img/img_circleright.png')}
               style={styles.smallcircle}
               />
               <TouchableOpacity  onPress={() =>setCount((count+1))}>
               <Image source={require('../../img/button_topbar.png')}
                      style={styles.topbar}         
                />
             </TouchableOpacity>
           

            
            <View style={styles.box1}>
                <View style={{flexDirection:"row"}}>
                    <Text style={styles.currency}>Currency</Text>
                    <Image source={require('../../img/icon_updown.png')}
                            style={styles.updown}/>
                    <Text style={styles.sell}>Sell</Text>
                    <Text style={styles.buy}>Buy</Text>
                </View>
                <View style={{width:290,height:0,borderWidth:1,borderColor:"#707070",marginLeft:34.5,marginTop:16.5}}>
                    <Image source={require('../../img/img_usd.png')}
                            style={styles.usd}/>
                    
                
                </View>
                <View style={{flexDirection:"row"}}>
                <Text style={styles.usdsell}>{Data.moneycurrency[0].sell}</Text>
                <Text style={styles.usdbuy}>{Data.moneycurrency[0].buy}</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                <Image source={require('../../img/img_rmb.png')}
                            style={styles.rmb}/>
                <Text style={styles.rmbsell}>{Data.moneycurrency[1].sell}</Text>
                <Text style={styles.rmbbuy}>{Data.moneycurrency[1].buy}</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                <Image source={require('../../img/img_jpy.png')}
                            style={styles.jpy}/>
                <Text style={styles.jpysell}>{Data.moneycurrency[2].sell}</Text>
                <Text style={styles.jpybuy}>{Data.moneycurrency[2].buy}</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                <Image source={require('../../img/img_gbp.png')}
                            style={styles.gbp}/>
                <Text style={styles.gbpsell}>{Data.moneycurrency[3].sell}</Text>
                <Text style={styles.gbpbuy}>{Data.moneycurrency[3].buy}</Text>
                </View>
                <Image style={styles.plus}
                       source={require('../../img/Icon_plus.png')}
                        />
            </View>
           </View> 
        )}else{
            return(
                <View style={styles.all}>
                <Image source={require('../../img/img_graycircle.png')}
                style={styles.bigcircle}
                />
                <Image source={require('../../img/img_circleright.png')}
                style={styles.smallcircle}
                />
                <TouchableOpacity  onPress={() =>setCount((count+1))}>
               <Image source={require('../../img/img_topbar2.png')}
                      style={styles.topbar}         
                />
             </TouchableOpacity>
            
 
             
             <View style={styles.box1}>
                 <View style={{flexDirection:"row"}}>
                     <Text style={styles.currency}>Currency</Text>
                     <Image source={require('../../img/icon_updown.png')}
                             style={styles.updown}/>
                     <Text style={styles.sell}>Sell</Text>
                     <Text style={styles.buy}>Buy</Text>
                 </View>
                 <View style={{width:290,height:0,borderWidth:1,borderColor:"#707070",marginLeft:34.5,marginTop:16.5}}>
                     <Image source={require('../../img/img_usd.png')}
                             style={styles.usd}/>
                     
                 
                 </View>
                 <View style={{flexDirection:"row"}}>
                 <Text style={styles.usdsell}>{Data.nowcurrency[0].sell}</Text>
                 <Text style={styles.usdbuy}>{Data.nowcurrency[0].buy}</Text>
                 </View>
                 <View style={{flexDirection:"row"}}>
                 <Image source={require('../../img/img_rmb.png')}
                             style={styles.rmb}/>
                 <Text style={styles.rmbsell}>{Data.nowcurrency[1].sell}</Text>
                 <Text style={styles.rmbbuy}>{Data.nowcurrency[1].buy}</Text>
                 </View>
                 <View style={{flexDirection:"row"}}>
                 <Image source={require('../../img/img_jpy.png')}
                             style={styles.jpy}/>
                 <Text style={styles.jpysell}>{Data.nowcurrency[2].sell}</Text>
                 <Text style={styles.jpybuy}>{Data.nowcurrency[2].buy}</Text>
                 </View>
                 <View style={{flexDirection:"row"}}>
                 <Image source={require('../../img/img_gbp.png')}
                             style={styles.gbp}/>
                 <Text style={styles.gbpsell}>{Data.nowcurrency[3].sell}</Text>
                 <Text style={styles.gbpbuy}>{Data.nowcurrency[3].buy}</Text>
                 </View>
                 <Image style={styles.plus}
                        source={require('../../img/Icon_plus.png')}
                         />
             </View>
            </View> 
            )
        }
};
const styles = StyleSheet.create({
    all:{
        position:"absolute",
        backgroundColor:"#24272C",
        height:1000,
        width:420
    },
    bigcircle:{
        width:189,
        height:189,

        marginLeft:287,
        marginTop:-65
    },
    smallcircle:{
        width:57,
        height:57,
        marginLeft:306,
        marginTop:-45,
        
    },
    topbar:{
        width:158,
        height:29,
        marginTop:21,
        marginLeft:128
    },
    box1:{
        backgroundColor:"#3E4148",
        width:359,
        height:343,
        borderRadius:30,
        marginTop:25,
        marginLeft:28
    },
    currency:{
        width:62,
        height:20,
        fontSize:15,
        color:"white",
        marginTop:46,
        marginLeft:45
    },
    updown:{
        width:7.2,
        height:11.91,
        marginTop:51,
        marginLeft:4.4
    },
    sell:{
        width:62,
        height:20,
        fontSize:15,
        color:"white",
        marginTop:46,
        marginLeft:81.4
    },
    buy:{
        width:62,
        height:20,
        fontSize:15,
        color:"white",
        marginTop:46,
        marginLeft:10
    },
    usd:{
        width:61,
        height:21,
        marginTop:21.5,
        marginLeft:10
    },
    usdsell:{
        width:40,
        height:20,
        fontSize:15,
        color:"white",
        marginLeft:200,
        marginTop:21.5
    },
    usdbuy:{
        width:40,
        height:20,
        fontSize:15,
        color:"white",
        marginLeft:30,
        marginTop:21.5
    },
    rmb:{
        width:62,
        height:20,
        marginTop:27,
        marginLeft:45
    },
    rmbsell:{
        width:30,
        height:20,
        fontSize:15,
        color:"white",
        marginLeft:96,
        marginTop:28
    },
    rmbbuy:{
        width:40,
        height:20,
        fontSize:15,
        color:"white",
        marginLeft:48,
        marginTop:28
    },
    jpy:{
        width:58,
        height:20,
        marginTop:27,
        marginLeft:45
    },
    jpysell:{
        width:30,
        height:20,
        fontSize:15,
        color:"white",
        marginLeft:100,
        marginTop:28
    },
    jpybuy:{
        width:40,
        height:20,
        fontSize:15,
        color:"white",
        marginLeft:48,
        marginTop:28
    },
    gbp:{
        width:60,
        height:20,
        marginTop:27,
        marginLeft:45
    },
    gbpsell:{
        width:37,
        height:20,
        fontSize:15,
        color:"white",
        marginLeft:92,
        marginTop:28
    },
    gbpbuy:{
        width:45,
        height:20,
        fontSize:15,
        color:"white",
        marginLeft:40,
        marginTop:28
    },
    plus:{
        width:35,
        height:35,
        marginTop:33,
        marginLeft:167
    }
});
export default Currency;