import * as React from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { Header } from './components/header';
import { Flbutton } from './components/floatingbtn';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default function ForumScreen() {
    return (
      <View style={{position:'relative',height:height-20}}>
      <ScrollView>
        <Header content='No new responses'></Header>
        <Text>Forum!</Text>
      </ScrollView>
      <Flbutton></Flbutton>
      </View>
    );
  }