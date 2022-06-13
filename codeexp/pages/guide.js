import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { Header } from './components/header'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

const articles = [
  {
    title: "How to survive in NS",
    author: "Joshua",
    article: "get good lol"
  },
  {
    title: "After NS - What's Next",
    author: "Yezhou",
    article: "life"
  },
  {
    title: "5 common rifle errors",
    author: "Isaac",
    article: "1: skill issue \n 2: skill issue \n 3: skill issue \n 4: skill issue \n 5: skill issue \n "
  },
];

const ArticleScreen = ({ route }) => {
  const {title, author, article} = route.params;

  return (<View>
    <Text>{title}</Text>
    <Text>By: {author}</Text>
    <Text>{article}</Text>
  </View>)
}

const Article = (props) => {
  return (
    <View>
      {/* help me style this thanks */}
      <Text>{`${props.title} by ${props.author}`}</Text>
    </View>
  )
}

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

function GuideScreen({ navigation }) {

  const renderArticle = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("ArticleScreen", { ...item })}>
        <Article title={item.title} author={item.author} />
      </TouchableOpacity>
    )
  }

    return (
      <ScrollView>
        <Header content='2 New Guides'></Header>
        <Text>Guides!</Text>
        <FlatList 
          data={articles}
          renderItem={renderArticle}
          keyExtractor={(item) => item.title}
        />
      </ScrollView>
    );
}

const Stack = createStackNavigator();

export default function GuideStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GuideScreen" component={GuideScreen} options={{headerShown: false}}/>
      <Stack.Screen name="ArticleScreen" component={ArticleScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}