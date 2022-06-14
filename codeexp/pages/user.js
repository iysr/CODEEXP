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
        <Header content={'Carlos Lee Ye Zhou'}></Header>
        <Text style={styles.textfield}>Rank: </Text>
        <Text style={styles.textfield}>Home Base: </Text>
        <Text style={styles.textfield}>Company: </Text>
        <Text style={styles.textfield}>Platoon: </Text>
        <Text style={styles.textfield}>Date of Enlistment: </Text>
      </ScrollView>
    );
}
const styles=StyleSheet.create({
  textfield:{
    marginLeft:20,
    fontSize:20,
    marginBottom: 20,
  },
})