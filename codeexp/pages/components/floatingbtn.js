import * as React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';

export const Flbutton = (props)=>{
    return(
    <TouchableOpacity style={{position:'absolute',bottom:20,right:20,width:60,height:60,borderRadius:25,backgroundColor:'green',zIndex:12}} onPress={props.action}>
        <Text style={{fontSize:30,position:'absolute',color:'#fff',top:7,left:20}}>{props.text}</Text>
    </TouchableOpacity>
    );
}