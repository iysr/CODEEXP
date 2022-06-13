import * as React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header } from './components/header';

export default function ForumScreen() {
    return (
      <ScrollView>
        <Header content='No new responses'></Header>
        <Text>Forum!</Text>
      </ScrollView>
    );
  }