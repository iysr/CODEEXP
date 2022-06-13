import * as React from 'react'
import { Text } from 'react-native';

export const H1 = (props) =>{
    return(
        <Text style={{fontSize:28,marginLeft:20,marginBottom:10,marginTop:10,fontWeight:'500'}}>{props.content}</Text>
    )
}