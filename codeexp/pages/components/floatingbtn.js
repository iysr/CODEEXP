import * as React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';

export const Flbutton = (props)=>{
    return(
    <TouchableOpacity style={{position:'absolute',bottom:20,right:20,width:50,height:50,borderRadius:25,backgroundColor:'black',zIndex:12}} onPress={props.action}>
        <Text style={{fontSize:20,margin:15}}>+</Text>
    </TouchableOpacity>
    );
}