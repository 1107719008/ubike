import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native'
import Swiper from 'react-native-swiper'
import Data from '../json/FavoriteData.json';
export default class SwiperDemo extends Component {
    render() {
        return (
        <Swiper style={styles.wrapper} showsButtons={false}>
            <View style={styles.slide1}>
                <View style={styles.box1}>
                    <View style={{flexDirection:"row"}}>
                    <Image source={require('../../img/img_box_gbp.png')}
                            style={styles.boxgbp}/>
                    <Image source={require('../../img/button_arrowright.png')}
                            style={styles.arrow}/>
                           
                            </View>
                    <View style={{flexDirection:"row"}}>
        <Text style={styles.icon}>{Data.mycurrency[0].moneyicon}</Text>
        <Text style={styles.integer}>{Data.mycurrency[0].integer}</Text>
        <Text style={styles.float}>{Data.mycurrency[0].float}</Text>
        <Image source={require('../../img/button_buy.png')}
                            style={styles.buttonbuy}/>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <View style={{flexDirection:"column"}}>
                        <Text style={styles.value}>{Data.mycurrency[0].value}</Text>
                        <Text style={styles.money}>{Data.mycurrency[0].money}</Text>
                        </View>
                        <Image style={styles.buttonsell}
                                source={require('../../img/button_sell.png')}/>
                    </View>
                </View>
            </View>
            <View style={styles.slide2}>
            <View style={styles.box1}>
                    <View style={{flexDirection:"row"}}>
                    <Image source={require('../../img/img_box_usd.png')}
                            style={styles.boxusd}/>
                    <Image source={require('../../img/button_arrowright.png')}
                            style={styles.arrow}/>
                           
                            </View>
                    <View style={{flexDirection:"row"}}>
        <Text style={styles.icon}>{Data.mycurrency[1].moneyicon}</Text>
        <Text style={styles.integer}>{Data.mycurrency[1].integer}</Text>
        <Text style={styles.float}>{Data.mycurrency[1].float}</Text>
        <Image source={require('../../img/button_buy.png')}
                            style={styles.buttonbuy}/>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <View style={{flexDirection:"column"}}>
                        <Text style={styles.value}>{Data.mycurrency[1].value}</Text>
                        <Text style={styles.money}>{Data.mycurrency[1].money}</Text>
                        </View>
                        <Image style={styles.buttonsell}
                                source={require('../../img/button_sell.png')}/>
                    </View>
                </View>
            </View>
           
        </Swiper>
        )
    }
}

const styles=StyleSheet.create( {
    wrapper: {
        height:200,
        backgroundColor:"#24272C",

    },
    slide1: {
       
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#24272C'
    },
    box1:{
        marginTop:20,
        width:278,
        height:162,
        backgroundColor:"#3E4148",
        borderRadius:20
    },
    boxgbp:{
        width:99,
        height:25,
        marginTop:18,
        marginLeft:20
    },
    boxusd:{
            width:70,
            height:25,
            marginTop:20,
            marginLeft:20
    },
    arrow:{
        width:8.27,
        height:14.46,
        marginTop:23.15,
        marginLeft:126
    },
    icon:{
        width:15,
        fontSize:25,
        color:"white",
        marginTop:25,
        marginLeft:22
    },
    integer:{
        fontSize:28,
        color:"white",
        marginTop:22,
        marginLeft:14.6
    },
    float:{
        fontSize:15,
        color:"white",
        marginTop:34,
        marginLeft:5
    },
    buttonbuy:{
        marginTop:10,
        marginLeft:49,
        width:77,
        height:45,
    },
    buttonsell:{
        marginTop:-10,
        marginLeft:65,
        width:77,
        height:45,
    },
    value:{
        fontSize:9,
        color:"#868788",
        marginLeft:46,
        marginTop:14
    },
    money:{
        fontSize:9,
        color:"#868788",
        marginLeft:60
    },
    slide2: {
       
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#24272C'
    },
    slide3: {
       
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});