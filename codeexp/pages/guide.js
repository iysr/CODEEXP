import * as React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';

const Article = (props) => {
  return <Text>{`${props.title} by ${props.author}`}</Text>
}

export default function GuideScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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