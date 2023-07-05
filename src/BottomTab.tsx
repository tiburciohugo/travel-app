import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Entypo, FontAwesome5 } from "@expo/vector-icons";
import WelcomeScreen from "./screens/WelcomeScreen";
import DashboardScreen from "./screens/DashboardScreen";
import { colors } from "../data";
import LocationsScreen from "./screens/LocationsScreen";
import ResortsScreen from "./screens/ResortsScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: colors.blue[7],
          paddingBottom: 5,
          elevation: 0,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarLabel: "Início",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="ios-home"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Locations"
        component={LocationsScreen}
        options={{
          tabBarLabel: "Locais",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo
              name="aircraft"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Resorts"
        component={ResortsScreen}
        options={{
          tabBarLabel: "Resorts",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5
              name="hotel"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Configurações",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="ios-settings"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
