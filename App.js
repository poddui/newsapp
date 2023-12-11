import React from "react";
import Login from "./screens/Login.js"
import Start from "./screens/Start.js";
import Register from "./screens/Register.js"
import News from "./screens/News.js"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from "./screens/Search.js";
import NewsViewer from "./screens/NewsViewer.js";
import User from "./screens/User.js";
import Icon from 'react-native-vector-icons/Entypo';

export default function App() {

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const [ keyword, setKeyword ] = React.useState('');

  const NewsBottomTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 14, 
          },
          tabBarStyle: {
            backgroundColor: '#030712',
          },
          tabBarActiveTintColor: '#f9fafb',
          tabBarInactiveTintColor: '#374151', 
        }}
      >
        <Tab.Screen 
          name="News"
          options={{ 
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({ color, size }) => (
              <Icon name="news" size={size} color={color} />
            ),
          }}
        >{(props) => <News {...props} keyword={keyword} setKeyword={setKeyword}/>}
        </Tab.Screen> 
        <Tab.Screen 
          name="User" 
          component={User}
          options={{ 
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen
            name="Start"
            component={Start}
            options={{ headerShown: false }} 
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ 
              headerShown: true,
              headerTransparent: true, 
              headerTitle: "",
              headerTintColor: '#f9fafb',
            }} 
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ 
              headerShown: true,
              headerTransparent: true, 
              headerTitle: "",
              headerTintColor: '#f9fafb',
            }} 
          />
          <Stack.Screen
            name="NewsBottomTabs"
            component={NewsBottomTabs}
            options={{ 
              headerShown: false,
            }}
          >
          </Stack.Screen>
          <Stack.Screen
            name="Search"
            options={{ 
              headerShown: true,
              headerTransparent: true, 
              headerTitle: "",
              headerTintColor: '#f9fafb'
            }}
          >
            {(props) => <Search {...props} keyword={keyword} setKeyword={setKeyword}/>}
          </Stack.Screen>
          <Stack.Screen
            name="NewsViewer"
            component={NewsViewer}
            options={{ 
              headerShown: true,
              headerTitle: "Back",
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
