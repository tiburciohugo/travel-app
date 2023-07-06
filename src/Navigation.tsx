import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import DashboardScreen from "./screens/DashboardScreen";
import BottomTab from "./BottomTab";
import ProfileScreen from "./screens/ProfileScreen";
import LocationDetailsScreen from "./screens/LocationDetailsScreen";
import ResortDetailsScreen from "./screens/ResortDetailsScreen";
import { RootStackParamList } from "../types/types";



const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyTabs"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
      name="LocationDetails"
      component={LocationDetailsScreen}
      options={{ headerShown: false }}
    />
      <Stack.Screen
      name="ResortDetails"
      component={ResortDetailsScreen}
      options={{ headerShown: false }}
    />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
