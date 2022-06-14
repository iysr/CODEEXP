import * as React from 'react'
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const Activity = (props) =>{
    let img={uri:props.image}
    return(
        <TouchableOpacity onPress={props.action} style={{width: width-20, marginLeft:10,marginRight:10,height: 100,borderRadius:25,position:'relative',overflow:'hidden',marginBottom:10}}>
            <Image source={img} resizeMode="cover" style={{width:width-20,height:100,borderRadius:25}}></Image>
                <Text style={{position:'absolute',top:15,left:20,fontSize:20,color:props.txtclr}}>{props.name}</Text>
                <Text style={{position:'absolute',bottom:15,left:20,fontSize:20,color:props.txtclr}}>{props.location}</Text>
                <Text style={{position:'absolute',bottom:20,right:20,fontSize:40,color:props.txtclr}}>{props.time}</Text>
        </TouchableOpacity>
    );
}