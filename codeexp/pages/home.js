import * as React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Header } from './components/header'

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default function HomeScreen() {
    return (
      <View>
        <Header content={'Welcome,'+'\n'+'Carlos Lee Ye Zhou!'}></Header>
        <Text>Home!</Text>
      </View>
    );
}
const styles=StyleSheet.create({
  
})