import React from 'react';
import { Button, ScrollView, View, Text, TextInput,StyleSheet,Image, StatusBar} from 'react-native';
import { NavigationContainer,DefaultTheme,} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PinkButton, LoginWithButton, ForgotPasswordButton} from './custom-button.js';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Carousel, { Pagination } from 'react-native-snap-carousel'

//Stack Navigation Themes
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

const SplashScreenTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#D2D2D2'
  },
};


//Login and Signup stack navigation

const Stack = createStackNavigator();

export default class App extends React.Component {

//custom font library
  state = {
    loaded: false,
  };

_loadFontsAsync= async()=>{
    await Font.loadAsync({
      'Raleway':require('./assets/fonts/Raleway-Regular.ttf'),
      'WorkSans':require('./assets/fonts/WorkSans-Regular.ttf') 
    });
    this.setState({loaded:true});
  }

componentDidMount(){
  this._loadFontsAsync();
}

  render(){
    if(!this.state.loaded) {
      return <AppLoading/>;
    }
  return (
    <NavigationContainer theme={MyTheme}>
    <StatusBar barStyle="default"/>
      <Stack.Navigator initialRouteName="Splash Screen"> 

          <Stack.Screen name="Splash Screen" component={SplashScreen}
          options={{header:()=> null}}/>

          <Stack.Screen name="Login" component={Login}
          options={{header:()=> null}}/>

          <Stack.Screen name="Forgot Password" component={LoginTrouble} 
          options={{title:"HuddleApp",headerStyle:{backgroundColor:'midnightblue'},headerTintColor:'white'}}/>

          <Stack.Screen name="Signup" component={Signup}
          options={{title:"HuddleApp",headerStyle:{backgroundColor:'midnightblue'},headerTintColor:'white'}}/>
        
          <Stack.Screen name="Terms and Policy" component={TermsAndPolicy} 
          options={{title:"HuddleApp",headerStyle:{backgroundColor:'midnightblue'},headerTintColor:'white'}}/>
          
          <Stack.Screen name="Verification" component={Verification} 
          options={{title:"HuddleApp",headerStyle:{backgroundColor:'midnightblue'},headerTintColor:'white'}}/>

          <Stack.Screen name="Introduction" component={Introduction} 
          options={{title:"HuddleApp",headerStyle:{backgroundColor:'midnightblue'},headerTintColor:'white'}}/>

          <Stack.Screen name="LoginTrouble" component={LoginTrouble} 
          options={{title:"HuddleApp",headerStyle:{backgroundColor:'midnightblue'},headerTintColor:'white'}}/>

        <Stack.Screen name="Home" component={Home} 
        options={{title:"HuddleApp",headerStyle:{backgroundColor:'midnightblue'},headerTintColor:'white'}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}}

//Signup screens

function SplashScreen({ navigation }) {
  return (
    <View style={{flex:1,backgroundColor:'#787AED',flexDirection:'column',alignItems:'center'}}>
      <View style={{flex:1}}>
      </View>
      <View style={{flex:1}}>
      <Image resize = {'contain'} width= {null} height = {null} source = {require('./assets/img/Logo_Profile_Icon_White.png')}/>
      </View>
      <View style={{flex:1}}>
      <Image resize = {'contain'} width= {null} height = {null} source = {require('./assets/img/Logo_Huddle_White.png')}/>
      </View>
      <Button
        title="Login page"
        onPress={() => {console.log("Login from LoginTrouble");navigation.push('Login')}}/>
    </View>
  );
}

function Login({ navigation }) {  
  return (
  <View style= {{flexDirection:'column',alignItems: 'center'}}>
    <View style={styles.LoginStyle}>
      <Image resize = {'contain'} width= {null} height = {null} source = {require('./assets/img/HuddleLogo.png')}/>
    </View>
    <View style ={{marginBottom: 30, alignItems:'center'}}> 
      <Text style={{fontFamily:'Raleway', fontSize: 18}}>Let's make it count</Text>
    <View/>
    <View style = {styles.LoginInputstyle}>
      <Text style={styles.ralewayFontStyle}>Email or mobile number</Text>
      <TextInput/>
    </View>
    <View style = {styles.LoginInputstyle}>
      <Text style={styles.ralewayFontStyle}>Password</Text>
      <TextInput secureTextEntry ={true}/>
    </View>
    <View style= {{width:'70%', alignSelf:"center"}}>
      <ForgotPasswordButton
        title="Forgot Password?"
        onPress={() => {console.log("Forgot Password");navigation.push('Forgot Password')}}/>
    </View>
    <View style={styles.LoginButtonStyle}>
      <PinkButton 
        title= "Sign up"
        onPress={() => {console.log("Signup");navigation.push('Signup')}}/>
      <PinkButton
        title = "Log in"
        onPress={() => {console.log("Home");navigation.push('Home')}}/>
    </View>
    <View style={styles.LoginWithStyle}>
      <LoginWithButton 
        title="Log in with Google" 
        onPress={() => {console.log("Home");navigation.push('Home')}}/>
      </View>
      <View style={styles.LoginWithStyle}>
      <LoginWithButton 
        title="Log in with Facebook" 
        onPress={() => {console.log("Home");navigation.push('Home')}}/>
      </View>
      <View style={{width:'70%', alignItems:'center'}}>
        <ForgotPasswordButton
          title="Terms and Policy" 
          onPress={() => {console.log("Terms and Policy");navigation.push('Terms and Policy')}}/>
      </View>
    </View>
  </View>
  );
}

function Signup({ navigation }) {
  return (
  <View style={{flex:1}}>
  <ScrollView>
    <View style={{alignItems:'center', justifyContent:'space-between',marginBottom:"8%"}}>
      <Text style={{fontFamily:'WorkSans', fontWeight:'bold', fontSize:32}}>Let's get started</Text>
      <Text style={{width:'70%',fontFamily:'Raleway'}}>Please enter your information. We will only</Text>
      <Text style={{width:'70%',fontFamily:'Raleway'}} >display certain information on your profile.</Text>
    </View>
    <View style={styles.LoginInputstyle}>
      <Text style={styles.ralewayPinkFontStyle}>First Name</Text>
      <TextInput Classname = "FirstName"/>
    </View>
    <View style={styles.LoginInputstyle}>
      <Text style={styles.ralewayPinkFontStyle}>Last Name</Text>
      <TextInput/>
    </View>
    <View style={styles.LoginInputstyle}>
      <Text style={styles.ralewayPinkFontStyle}>Email Address</Text>
      <TextInput/>
    </View>
    <View style={styles.LoginInputstyle}>
      <Text style={styles.ralewayPinkFontStyle}>Password</Text>
      <TextInput secureTextEntry ={true}/>
    </View>
    <View style={styles.LoginInputstyle}>
      <Text style={styles.ralewayPinkFontStyle}>Confirm Password</Text>
      <TextInput secureTextEntry ={true}/>
    </View>
    <View style={styles.LoginInputstyle}>
      <Text style={styles.ralewayPinkFontStyle}>Birthday (MM/DD/YYY)</Text>
      <TextInput/>
    </View>
    <View style={styles.LoginInputstyle}>
      <Text style={styles.ralewayPinkFontStyle}>Phone Number</Text>
      <TextInput/>
    </View>
    <View style={{flexDirection:'column', alignItems:'center', justifyContent:'space-evenly', marginBottom:"8%"}}>
    <PinkButton
    title="Next"
    onPress={() => {console.log("Verification");navigation.push('Verification')}}/>
    </View>
  </ScrollView>
  </View>
  );
}

function Verification({ navigation }) {
  return (
    <View style={{flexDirection:'column', alignItems:'center', justifyContent:'space-evenly', marginBottom:"8%"}}>
    <View>
    <Text style={{fontFamily:'WorkSans', fontWeight:'bold', fontSize:32, marginBottom:"4%",marginTop:"3%"}}>Verification</Text>
    <Text style={{width:'70%',fontFamily:'Raleway', fontSize:14}}>We want to know that you're 100% real,</Text>
    <Text style={{width:'70%',fontFamily:'Raleway', fontSize:14, marginBottom:"8%"}}>so please verify on these platforms.</Text>
    <View style={{flexDirection:'column', alignItems:'center', justifyContent:'space-evenly', marginBottom:"8%"}}>
    <LoginWithButton 
      title="Verify Phone Number" 
      onPress={() => {console.log("Home");navigation.push('Home')}}/>
    </View>
    <View style={{flexDirection:'column', alignItems:'center', justifyContent:'space-evenly', marginBottom:"8%"}}>
    <LoginWithButton 
      title="Link to LinkedIn" 
      onPress={() => {console.log("Home");navigation.push('Home')}}/>
    </View>
    <View style={{flexDirection:'column', alignItems:'center', justifyContent:'space-evenly', marginBottom:"8%"}}>
    <LoginWithButton 
      title="Link to Facebook" 
      onPress={() => {console.log("Home");navigation.push('Home')}}/>
    </View>
    <View style={{flexDirection:'column', alignItems:'center', justifyContent:'space-evenly', marginBottom:"8%"}}>    
    <LoginWithButton 
      title="Link to Instagram" 
      onPress={() => {console.log("Home");navigation.push('Home')}}/>
    </View>
    <View style={{flexDirection:'column', alignItems:'center', justifyContent:'space-evenly', marginBottom:"8%"}}>
    <PinkButton
    title="Next"
    onPress={() => {console.log("Verification Confirmation");navigation.push('Verification Confirmation')}}/>
    </View>
    </View>
    </View>
  );
}

function Introduction({ navigation }) {
  return (
  <View>
      <Carousel>
      layout={"default"}
      sliderWidth = {300}
      itemWidth ={300}
      </Carousel>
    <View style={{flexDirection:'column', alignItems:'center', justifyContent:'space-evenly', marginBottom:"8%"}}>
      <PinkButton
        title="Next"
        onPress={() => {console.log("Introduction");navigation.push('Home')}}/>
      </View>
    </View>
  );
}

function LoginTrouble({ navigation }) {
  return (
    <View>
      <View style={{}}>
      <Text style={styles.LoginStyle}>LoginTrouble</Text>
      <Text>Hi</Text>
      <Button
        title="Login"
        onPress={() => {console.log("Login from LoginTrouble");navigation.push('Login')}}/>
      </View>
    </View>
  );
}

function TermsAndPolicy({ navigation }) {
  return (
    <View>
    <Text>TermsAndPolicy</Text>
    <Button
    title="Login"
    onPress={() => {console.log("Login from TermsAndPolicy");navigation.push('Login')}}/>
    </View>
  );
}

//Home Tab navigation

const Tab = createBottomTabNavigator();

function Home() {
  return (
      <Tab.Navigator initialRouteName="LoginTrouble">
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Post" component={Post} />
        <Tab.Screen name="Chat" component={Chat} /> 
        <Tab.Screen name="Profile" component={Profile} /> 
      </Tab.Navigator>
  );
}

//Home Screens

function Feed() {
  return (
    <View>
    <Text>Feed</Text>
    </View>
  );
}

function Explore() {
  return (
    <View>
    <Text>Explore</Text>
    </View>
  );
}

function Post() {
  return (
    <View>
    <Text>Post</Text>
    </View>
  );
}

function Chat() {
  return (
    <View>
    <Text>Chat</Text>
    </View>
  );
}

function Profile() {
  return (
    <View>
    <Text>Profile</Text>
    </View>
  );
}


const styles = StyleSheet.create({
//Login Styles
  LoginStyle:{
    flexDirection:'column',
    padding:10,
    alignItems:'center'
  },
  LoginInputstyle:{
    width:'70%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    alignSelf: 'center',
    padding: '2%',
    marginBottom:20
  },
  ralewayFontStyle:{
  fontFamily:'Raleway',
  fontSize: 12
  },
  ralewayPinkFontStyle:{
    fontFamily:'Raleway',
    fontSize: 12,
    color:'#F1927E'
    },
  LoginButtonStyle:{
    flexDirection:'row',
    padding:5,
    justifyContent:'space-around',
    alignItems: 'center',
    width: '70%'
  },
  LoginWithStyle:{
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
    justifyContent:'space-around',
    width: '70%'
  },
});