import * as React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default function HomeScreen() {
    return (
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.header}></View>
          <Text style={styles.headerText}>Welcome,{'\n'}Carlos Lee Ye Zhou</Text>
        </View>
        <Text>Home!</Text>
      </View>
    );
}
const styles=StyleSheet.create({
  headerContainer:{
    width: width,
    height: 0.4*height,
    position: 'relative',
  },
  header:{
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: height*1.5,
    borderTopWidth: height*0.4,
    borderRightColor: "transparent",
    borderTopColor: "#d4d4d4",
    zIndex: 1,
    overflow: 'visible',
  },
  headerText:{
    zIndex: 2,
    position: 'absolute',
    top: 0.18*height,
    left: 20,
    fontSize: 20,
  }
})