import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { Header } from './components/header';
import { Activity } from './components/activity';
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
    article: "1: skill issue \n2: skill issue \n3: skill issue \n4: skill issue \n5: skill issue"
  },
];

const ArticleScreen = ({ route }) => {
  const {title, author, article} = route.params;

  return (<View style={{marginLeft:20,marginRight:20,marginTop:20}}>
    <Text style={{fontSize:30,borderBottomColor:'#000',borderStyle:'solid',borderBottomWidth:2}}>{title}</Text>
    <Text style={{fontSize:20,marginTop:5,marginBottom:20}}>By: {author}</Text>
    <Text style={{fontSize:15}}>{article}</Text>
  </View>)
}

const Article = (props) => {
  return (
    <Activity image={props.bg} name={props.title} location={props.author}></Activity>
  )
}

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

function GuideScreen({ navigation }) {

  const renderArticle = ({ item }) => {
    return (
      <TouchableOpacity onPress={
        () => { 
          navigation.navigate("ArticleScreen", { ...item })
        }
      }>
        <Article title={item.title} author={item.author} />
      </TouchableOpacity>
    )
  }

    return (
      <ScrollView>
        <Header content='2 New Guides'></Header>
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
      <Stack.Screen name="ArticleScreen" component={ArticleScreen} options={({ route }) => ({ title: 'Article' })}/>
    </Stack.Navigator>
  )
}