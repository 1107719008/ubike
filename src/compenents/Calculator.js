import React, { Component } from 'react';
import { View, TextInput,StyleSheet,KeyboardType,Image,Text ,Keyboard} from 'react-native';
import { color } from 'react-native-reanimated';

class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // 将父组件传递来的所有props传递给TextInput;比如下面的multiline和numberOfLines
        editable = {true}
        maxLength = {20}
      />
    );
  }
}

export default class UselessTextInputMultiline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      text: 0,
      
    };
  }

  // 你可以试着输入一种颜色，比如red，那么这个red就会作用到View的背景色样式上
  render() {
    return (
      
    <View style={styles.all}>
      <Image style={{width:189,height:189,marginLeft:287,marginTop:-110}}
               source={require("../../img/img_graycircle.png")}/>
 <Image style={{width:57,height:57,marginLeft:307,marginTop:-35}}
               source={require("../../img/img_circleright.png")}/>
    <View style={styles.box}>
      <View style={{flexDirection:"row"}}>
      <Text style={styles.currency}>Currency</Text>
      <Text style={styles.value}>Value</Text>
      </View>
      <View style={{width:290,height:1,backgroundColor:"#707070",marginTop:7.5,marginLeft:34.5}}>
        <Image style={styles.usd}
                source={require('../../img/calculator/usd.png')}/>
                
                </View>
      
      <View style={{
       backgroundColor: this.state.text,
       borderBottomColor: '#000000',
       borderBottomWidth: 0,
       width:200,
       height:28,
      marginLeft:265,
    marginTop:25}}
       >
         <UselessTextInput

           multiline = {true}
           numberOfLines = {4}
           onChangeText={(text) => this.setState({text})}
           value={this.state.text}
           style={{color:"white",fontSize:20}}
           placeholder="number" keyboardType="numeric"clearTextOnFocus="true"  keyboardAppearance="dark" blurOnSubmit="false" returnKeyLabel='Done' 
           returnKeyType='done' 
           onSubmitEditing={Keyboard.dismiss}
        />
      
      </View>
      <View >
          <Image style={styles.rmb}
                source={require('../../img/calculator/rmb.png')}/>
          <Text style={styles.rmbnum}>{(this.state.text*7.06).toFixed(2)}</Text>
          <Image style={styles.rmb}
                source={require('../../img/calculator/jpy.png')}/>
          <Text style={styles.rmbnum}>{(this.state.text*106.67).toFixed(2)}</Text>
          <Image style={styles.rmb}
                source={require('../../img/calculator/gbp.png')}/>
          <Text style={styles.rmbnum}>{(this.state.text*0.8).toFixed(2)}</Text>
          <Image style={styles.rmb}
                source={require('../../img/calculator/eur.png')}/>
          <Text style={styles.rmbnum}>{(this.state.text*0.92).toFixed(2)}</Text>
          <Image style={styles.rmb}
                source={require('../../img/calculator/twd.png')}/>
          <Text style={styles.rmbnum}>{(this.state.text*29.81).toFixed(2)}</Text>
          <Image style={styles.rmb}
                source={require('../../img/calculator/cad.png')}/>
          <Text style={styles.rmbnum}>{(this.state.text*1.39).toFixed(2)}</Text>
          <Image style={styles.rmb}
                source={require('../../img/calculator/hkd.png')}/>
          <Text style={styles.rmbnum}>{(this.state.text*7.75).toFixed(2)}</Text>
          <Image source={require('../../img/Icon_plus.png')}
                  style={styles.plus}/>
       </View>
      </View>
     </View>
    );
  }
};
const styles = StyleSheet.create({
  all:{
    position:"absolute",
     backgroundColor:"#24272C",
     height:1300,
     width:420
  },
  box:{
    width:359,
    height:695,
    backgroundColor:"#3E4148",
    marginTop:70,
    marginLeft:28,
    borderRadius:20
  },
  currency:{
    fontSize:15,
    color:"white",
    width:65,
    height:20,
    marginTop:27,
    marginLeft:53
  },
  value:{
    fontSize:15,
    color:"white",
    width:60,
    height:20,
    marginTop:27,
    marginLeft:146
  },
  usd:{
    width:95,
    height:35,
    marginTop:29.5,
    marginLeft:10
  },
  rmb:{
    width:95,
    height:35,
    marginTop:32,
    marginLeft:45
  },
  rmbnum:{
    fontSize:15,
    color:"white",
    width:60,
    height:20,
    marginTop:-28,
    marginLeft:265
  },
  plus:{
    width:35,
    height:35,
    marginTop:57,
    marginLeft:165
  }
})