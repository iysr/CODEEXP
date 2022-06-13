import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native';
import 'react-native-gesture-handler';
import { Header } from './components/header';
import { Activity } from './components/activity';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

const articles = [
  {
    title: "How to Survive in NS",
    author: "Joshua",
    article: "get good lol",
    image: "https://probonoaustralia.com.au/wp-content/uploads/2016/11/survive.jpg",
    txtclr: '#fff',
  },
  {
    title: "After NS - What's Next",
    author: "Yezhou",
    article: "life",
    image: "https://miro.medium.com/max/1400/0*17oIVIxMTwLhztBI",
    txtclr: '#fff',
  },
  {
    title: "5 Common Rifle Errors",
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

const styles = StyleSheet.create({
  articleView: {
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 30
  },
  articleRow: {
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    flexDirection: "row"
  },
  articleTitle: {
    fontSize: 20,
    flex: 1,
    alignSelf: "left"
  },
  articleAuthor: {
    flex: 1,
    alignSelf: "right"
  }
})