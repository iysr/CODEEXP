import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'; 
import HomeScreen from './pages/home.js';
import UserScreen from './pages/user.js';
import GuideStack from './pages/guide.js';
import SchScreen from './pages/schedule.js';

const Tab = createBottomTabNavigator();
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default function App() {
  return (
    <NavigationContainer cardStyle={{flex:1}}>
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
            } else if(route.name==='Schedule'){
              iconName = 'calendar'
            }

            // You can return any component that you like here!
            return <Feather name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })} initialRouteName='Home'
      >
        <Tab.Screen name="Home" component={HomeScreen} style={styles.inter} options={{ headerShown: false }} />
        <Tab.Screen name="Guides" component={GuideStack} style={styles.inter} options={{headerShown:false}}/>
        <Tab.Screen name="Schedule" component={SchScreen} style={styles.inter} options={{headerShown:false}}/>
        <Tab.Screen name="You" component={UserScreen} style={styles.inter} options={{headerShown:false}}/>
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
  screen: {
    fontFamily: 'Inter',
    width: width,
    height: height,
    overflow: 'scroll',
  },
});
