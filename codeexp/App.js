import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'; 
import HomeScreen from './pages/home.js';
import UserScreen from './pages/user.js';
import GuideScreen from './pages/guide.js';
import ForumScreen from './pages/forum.js';
import SchScreen from './pages/schedule.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'You') {
              iconName = 'user';
            } else if (route.name==='Guides'){
              iconName = 'book-open'
            } else if(route.name==='Forum'){
              iconName = 'layers'
            } else if(route.name==='Schedule'){
              iconName = 'calendar'
            }

            // You can return any component that you like here!
            return <Feather name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Guides" component={GuideScreen} style={styles.inter}/>
        <Tab.Screen name="Schedule" component={SchScreen} style={styles.inter}/>
        <Tab.Screen name="Home" component={HomeScreen} style={styles.inter}/>
        <Tab.Screen name="Forum" component={ForumScreen} style={styles.inter}/>
        <Tab.Screen name="You" component={UserScreen} style={styles.inter}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inter: {
    fontFamily: 'Inter',
  },
});
