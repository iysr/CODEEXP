import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { Header } from './components/header'
import { createStackNavigator } from '@react-navigation/stack';

const articles = [
  {
    title: "How to survive in NS",
    author: "Joshua"
  },
  {
    title: "After NS - What's Next",
    author: "Yezhou"
  },
  {
    title: "5 common rifle errors",
    author: "Isaac"
  },
];

const Article = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {

      }}
    >
      <Text>{`${props.title} by ${props.author}`}</Text>
    </TouchableOpacity>
  )
}

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default function GuideScreen() {
    return (
      <ScrollView>
        <Header content='2 New Guides'></Header>
        <Text>Guides!</Text>
        <FlatList 
          data={articles}
          renderItem={
            ({ item }) => <Article title={item.title} author={item.author}></Article>
          }
        />
      </ScrollView>
    );
}