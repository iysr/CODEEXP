import * as React from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { Header } from './components/header'

const Article = (props) => {
  return <Text>{`${props.title} by ${props.author}`}</Text>
}

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default function UserScreen() {
    return (
      <View>
        <Header content='2 New Guides'></Header>
        <Text>Guides!</Text>
        <FlatList 
          data={[
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
          ]}
          renderItem={
            ({ item }) => <Article title={item.title} author={item.author}></Article>
          }
        />
      </View>
    );
}