import React from "react";
import { StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content" // You can set it to 'dark-content' if you prefer
        translucent={false} // Allows content to be drawn behind the status bar
        backgroundColor="lightblue" // Makes the status bar background transparent
      />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "tint",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "lightblue",
          },
          headerStyle: {
            backgroundColor: "lightblue",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
            color: "tomato",
          },
        }}
      >
        <Tab.Screen
          name={"current"}
          component={CurrentWeather}
          options={{
            tabBarIcon: ({ focused }) => <Feather name={"droplet"} size={25} color={focused ? "tomato" : "black"} />,
          }}
        />
        <Tab.Screen
          name={"upcoming"}
          component={UpcomingWeather}
          options={{
            tabBarIcon: ({ focused }) => <Feather name={"clock"} size={25} color={focused ? "tomato" : "black"} />,
          }}
        />
        <Tab.Screen
          name={"city"}
          component={City}
          options={{
            tabBarIcon: ({ focused }) => <Feather name={"home"} size={25} color={focused ? "tomato" : "black"} />,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Tabs;
