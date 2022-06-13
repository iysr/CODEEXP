import * as React from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { Header } from './components/header'
import { db } from "./components/database.js"
import { doc, getDoc } from "./components/firebase-firestore.js";


let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const user_token = "kbeavzZIM62lT7MjnqXA";
let data = "Hello World";

async function getUser() {
  const docRef = doc(db, "User", user_token);
  const docSnap = await getDoc(docRef);
  return docSnap;
}

let docSnap = "test"

getUser()
  .then(data => {
    docSnap = data;
    console.log(docSnap)
  });

export default function UserScreen() {
    return (
      <ScrollView>
        <Header content={data}></Header>
        <Text>You.</Text>
      </ScrollView>
    );
}
const styles=StyleSheet.create({
    headerContainer:{
      width: width,
      height: 0.4*height,
      position: 'relative',
      marginBottom: 30,
    },
    header:{
      width: width+10,
      height: height*0.2,
      backgroundColor: "#d4d4d4",
      transform: [{skewY:'-15deg'},{translateY:height*0.15},{translateX:-25}],
      zIndex: 1,
      borderRadius: 25,
    },
    fill:{
      width: width,
      height: height*0.27,
      backgroundColor: '#d4d4d4',
      position: 'absolute',
    },
    headerText:{
      zIndex: 2,
      position: 'absolute',
      top: height*0.18,
      left: 20,
      fontSize: 25,
    }
  })