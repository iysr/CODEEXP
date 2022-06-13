import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/header';

export default function ForumScreen() {
    return (
      <View>
        <Header content='No new responses'></Header>
        <Text>Forum!</Text>
      </View>
    );
  }