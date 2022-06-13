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
    article: "1: skill issue \n2: skill issue \n3: skill issue \n4: skill issue \n5: skill issue"
  },
];

const ArticleScreen = ({ route }) => {
  const {title, author, article} = route.params;

  return (<View style={styles.articleView}>
    <Text style={styles.title}>{title}</Text>
    <Text>By: {author}</Text>
    <Text>{article}</Text>
  </View>)
}

const Article = (props) => {
  return (
    <View style={styles.articleRow}>
      <Text style={styles.articleTitle}>{props.title}</Text>
      <Text style={styles.articleAuthor}>By: {props.author}</Text>
    </View>
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
        <Header content={`${articles.length} New Guides`}></Header>
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
      <Stack.Screen name="ArticleScreen" component={ArticleScreen} options={({ route }) => ({ title: route.params.title })}/>
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