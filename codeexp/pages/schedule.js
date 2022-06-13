import * as React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Header } from './components/header'

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default function UserScreen() {
    return (
      <View>
        <Header content='3 Upcoming Activities'></Header>
        <Text>Schedule</Text>
      </View>
    );
}