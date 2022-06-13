import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native';
import 'react-native-gesture-handler';
import { Header } from './components/header';
import { Activity } from './components/activity';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

const articles = [
  {
    title: "How to survive in NS",
    author: "Joshua",
    article: "get good lol",
    image: "data:image/jpeg;base64,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",
    txtclr: '#fff',
  },
  {
    title: "After NS - What's Next",
    author: "Yezhou",
    article: "life",
    image: "https://www.triometric.net/wp-content/uploads/2018/11/Airline-NDC-vision.jpg",
    txtclr: '#000',
  },
  {
    title: "5 common rifle errors",
    author: "Isaac",
    article: "1: skill issue \n2: skill issue \n3: skill issue \n4: skill issue \n5: skill issue",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/M16A2_noBG.jpg/800px-M16A2_noBG.jpg",
    txtclr: '#000',
  },
];

const ArticleScreen = ({ route }) => {
  const {title, author, article, image} = route.params;
  let img={uri:image}
  return (<View style={{marginLeft:20,marginRight:20,marginTop:20}}>
    <Text style={{fontSize:30,borderBottomColor:'#000',borderStyle:'solid',borderBottomWidth:2}}>{title}</Text>
    <Text style={{fontSize:20,marginTop:5,marginBottom:20}}>By: {author}</Text>
    <Image source={img} resizeMode="cover" style={{width:width-40,borderRadius:25,height:200,marginBottom:20}}></Image>
    <Text style={{fontSize:15}}>{article}</Text>
  </View>)
}

const Article = (props) => {
  return (
    <Activity image={props.bg} name={props.title} location={props.author} txtclr={props.txtclr}></Activity>
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
        <Article title={item.title} author={item.author} bg={item.image} txtclr={item.txtclr}/>
      </TouchableOpacity>
    )
  }

    return (
      <ScrollView>
        <Header content='3 New Guides'></Header>
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