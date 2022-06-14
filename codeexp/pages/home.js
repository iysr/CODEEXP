import * as React from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native';
import { Header } from './components/header'
import { Activity } from './components/activity'
import { H1 } from './components/textlevels'
import { TouchableOpacity } from 'react-native-gesture-handler';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default function HomeScreen({ navigation }) {
    return (
      <ScrollView>
        <Header content={'Welcome,'+'\n'+'Carlos Lee Ye Zhou!'}></Header>
        <H1 content="Check In"></H1>
        <View style={{width: width-20, marginLeft:10,marginRight:10,height: 100,borderRadius:25,position:'relative',overflow:'hidden',marginBottom:10}}>
            <Image resizeMode="cover" style={{width:width-20,height:100,borderRadius:25}}></Image>
                <Text style={{position:'absolute',top:35,left:width/2,fontSize:30,color:'#fff'}}>Check In</Text>
        </View>
        <H1 content='Upcoming Activities'></H1>
        <Activity image='https://c1.wallpaperflare.com/preview/21/2/561/asphalt-ground-fixed-asphalt-pavement.jpg' txtclr='#fff' name='Physical Training' location='Parade Square' time='8:00'></Activity>
        <Activity image='https://media.istockphoto.com/photos/beautiful-background-of-black-and-red-picture-id1307317595?b=1&k=20&m=1307317595&s=170667a&w=0&h=hVqXq24qtxfR-7zK9Q6MP9_jew4dOqBoe86RhigenBw=' txtclr='#fff' name='Tactical Training' location='Firing Range' time='11:00'></Activity>
        <Activity image='https://wallpaperaccess.com/full/3813543.jpg' txtclr='#fff' name='Network Security' location='Computer Lab 2' time='15:00'></Activity>
        <H1 content="Featured Articles"></H1>
        <TouchableOpacity onPress={
          () => navigation.navigate("Guides", {
            screen: "ArticleScreen", 
            params: {
              title: "How to Survive in NS",
              author: "Joshua",
              article: "get good lol",
              image: "https://probonoaustralia.com.au/wp-content/uploads/2016/11/survive.jpg",
              txtclr: '#fff',
            },
            initial: false,
          })
        }>
          <Activity image='https://wallpaperaccess.com/full/3813543.jpg' txtclr='#fff' name="How to Survive in NS"></Activity>
        </TouchableOpacity>
      </ScrollView>
    );
}
const styles=StyleSheet.create({
  part:{
    width: width-20,
    marginLeft: 10,
    marginRight: 10,
  }
})