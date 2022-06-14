import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native';
import 'react-native-gesture-handler';
import { Header } from './components/header';
import { Activity } from './components/activity';
import { H1 } from './components/textlevels';
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
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus sapien lorem, sit amet tincidunt purus elementum lobortis. Ut faucibus varius mollis. Sed malesuada efficitur erat, vel vulputate eros fermentum feugiat. Phasellus sed quam placerat, interdum orci ac, sodales tellus. Aenean ultrices accumsan metus a pellentesque. Duis a ante ultricies felis ornare pulvinar. Nam quis nibh felis. Nullam sit amet mi metus. Curabitur nec pretium neque. Ut et nulla in magna vestibulum laoreet in sit amet sem. Etiam at orci dictum, fermentum lacus in, fringilla lacus. Etiam nec lectus at odio malesuada fringilla. Mauris suscipit a urna ut aliquet. Nam vulputate magna id massa cursus, quis porttitor quam lacinia. \n\nIn eget rutrum sapien, at sollicitudin odio.Phasellus quis aliquet lectus.Nam vel convallis nisi.Cras dictum nunc eget porttitor finibus.Interdum et malesuada fames ac ante ipsum primis in faucibus.Pellentesque non scelerisque eros, vitae consequat sapien.Nunc venenatis ipsum quis felis eleifend euismod.Maecenas vel venenatis tortor.Fusce pellentesque lacus ullamcorper ex efficitur ultricies.Sed ut enim dignissim, bibendum nisl a, euismod lacus.Vestibulum vel odio massa.Aenean sodales mi non porttitor blandit.In efficitur, lectus ut porttitor feugiat, metus felis fringilla tortor, ut feugiat dolor eros eu magna.Vestibulum non elit risus. \n\nNam eu ultricies sem.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Integer ornare, est a luctus vehicula, augue elit placerat leo, pharetra scelerisque quam quam nec velit.Ut commodo dignissim congue.Ut eros nibh, tempus ut erat eu, gravida congue dolor.Aliquam in consectetur justo.Nullam pellentesque turpis at massa tempus, eu posuere felis aliquet.Nam tristique ex dui, in laoreet ligula efficitur sed.\n\nNulla molestie facilisis tortor.Curabitur fermentum non turpis nec aliquam.Proin sed iaculis sem.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin molestie dapibus condimentum.Sed hendrerit, enim sed tempus tempor, mauris dui consequat libero, ac lacinia nisl eros eu mi.Aliquam congue libero a commodo consectetur.Nunc sagittis tortor nec placerat scelerisque.Morbi in accumsan ipsum.Duis maximus leo eu gravida aliquam.Vivamus ut orci eget mauris maximus pretium nec ut diam.Nulla facilisis nunc sed leo mattis, non lacinia orci ornare.Praesent et egestas turpis, at tempor quam.Phasellus eu neque vitae metus varius pellentesque vitae nec ligula.Nullam vestibulum convallis mi.\n\nDuis varius metus dictum, auctor sapien in, maximus elit.Phasellus rutrum est et velit fringilla, ac feugiat magna suscipit.Nulla convallis ante a lorem pretium, in finibus ligula interdum.Vestibulum id risus quam.Proin venenatis lacus ac metus malesuada dignissim.Vestibulum in erat mi.Praesent ultricies, odio quis hendrerit posuere, elit arcu gravida quam, a ultrices ligula felis nec ipsum.Nunc dictum pretium justo in imperdiet.Duis eget odio sit amet turpis efficitur efficitur.Aenean non ipsum bibendum, tempus erat ac, posuere tellus.Sed eget ante maximus, tincidunt justo a, facilisis augue.",
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
  return (<ScrollView style={{marginLeft:20,marginRight:20,marginTop:20}}>
    <Text style={{fontSize:30,borderBottomColor:'#000',borderStyle:'solid',borderBottomWidth:2}}>{title}</Text>
    <Text style={{fontSize:20,marginTop:5,marginBottom:20}}>By: {author}</Text>
    <Image source={img} resizeMode="cover" style={{width:width-40,borderRadius:25,height:200,marginBottom:20}}></Image>
    <Text style={{fontSize:15}}>{article}</Text>
  </ScrollView>)
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
      <View>
        <Header content={`${articles.length} New Guides`}></Header>
        <H1 content="New Guides"></H1>
        <FlatList 
          data={articles}
          renderItem={renderArticle}
          keyExtractor={(item) => item.title}
        />
        <H1 content="Older"></H1>
        <Text style={styles.longtext}>Nothing found...</Text>
      </View>
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
  },
  longtext:{
    marginLeft:20,
  }
})