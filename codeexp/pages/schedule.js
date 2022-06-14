import * as React from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { Header } from './components/header'
import { Activity } from './components/activity'
import { H1 } from './components/textlevels'
import { Flbutton } from './components/floatingbtn'

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default function UserScreen() {
    return (
      <View style={{position:'relative'}}>
      <ScrollView>
        <Header content='3 Upcoming Activities'></Header>
        <H1 content="Today's Activities"></H1>
        <Activity image='https://c1.wallpaperflare.com/preview/21/2/561/asphalt-ground-fixed-asphalt-pavement.jpg' txtclr='#fff' name='Physical Training' location='Parade Square' time='8:00'></Activity>
        <Activity image='https://media.istockphoto.com/photos/beautiful-background-of-black-and-red-picture-id1307317595?b=1&k=20&m=1307317595&s=170667a&w=0&h=hVqXq24qtxfR-7zK9Q6MP9_jew4dOqBoe86RhigenBw=' txtclr='#fff' name='Tactical Training' location='Firing Range' time='11:00'></Activity>
        <Activity image='https://wallpaperaccess.com/full/3813543.jpg' txtclr='#fff' name='Network Security' location='Computer Lab 2' time='15:00'></Activity>
        <H1 content="Tomorrow's Activities"></H1>
        <Activity image='https://c1.wallpaperflare.com/preview/21/2/561/asphalt-ground-fixed-asphalt-pavement.jpg' txtclr='#fff' name='Physical Training' location='Parade Square' time='8:00'></Activity>
        <Activity image='https://media.istockphoto.com/photos/beautiful-background-of-black-and-red-picture-id1307317595?b=1&k=20&m=1307317595&s=170667a&w=0&h=hVqXq24qtxfR-7zK9Q6MP9_jew4dOqBoe86RhigenBw=' txtclr='#fff' name='Tactical Training' location='Firing Range' time='11:00'></Activity>
        <Activity image='https://wallpaperaccess.com/full/3813543.jpg' txtclr='#fff' name='Network Security' location='Computer Lab 2' time='15:00'></Activity>
        <View style={{height:100}}></View>
      </ScrollView>
      <Flbutton text="+"></Flbutton>
      </View>
    );
}