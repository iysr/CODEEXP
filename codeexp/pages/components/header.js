import * as React from 'react'
import { Text, View, Dimensions } from 'react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const Header = (props)=>{
  return (
    <View style={{width: width,
      height: 0.4*height,
      position: 'relative',
      marginBottom: 30,}}>
        <View style={{width: width+10,
      height: height*0.2,
      backgroundColor: "#d4d4d4",
      transform: [{skewY:'-15deg'},{translateY:height*0.15},{translateX:-25}],
      zIndex: 1,
      borderRadius: 25,}}></View>
        <View style={{width: width,
      height: height*0.27,
      backgroundColor: '#d4d4d4',
      position: 'absolute',}}></View>
        <Text style={{zIndex: 2,
      position: 'absolute',
      top: height*0.18,
      left: 20,
      fontSize: 25,}}>{props.content}</Text>
    </View>
  );
}