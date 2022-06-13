import * as React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Header } from './components/header'
import { Activity } from './components/activity'
import { H1 } from './components/textlevels'

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default function HomeScreen() {
    return (
      <View>
        <Header content={'Welcome,'+'\n'+'Carlos Lee Ye Zhou!'}></Header>
        <H1 content='Upcoming Activities'></H1>
        <Activity image='https://c1.wallpaperflare.com/preview/21/2/561/asphalt-ground-fixed-asphalt-pavement.jpg' txtclr='#fff' name='Physical Training' location='Parade Square' time='8:00'></Activity>
      </View>
    );
}
const styles=StyleSheet.create({
  
})