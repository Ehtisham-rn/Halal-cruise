import {
  Image,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import HistoryScreen from "./HistoryScreen";
import UploadScreen from "./UploadScreen";
import NotificationsScreen from "./NotificationsScreen";
import ProfileScreen from "./ProfileScreen";
import Colors from "../Compenents/Colors/Colors";
import { KeyboardAvoidingView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const Tab = createBottomTabNavigator();

const CustomtabbarButton = ({ children, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{ top: -20, justifyContent: "center", alignItems: "center" }}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: Colors.UniLInkPrimary,
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);
const Bottombar = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          elevation: 0,
          position: keyboardVisible ? "absolute" : "relative",
          bottom: keyboardVisible ? -1000 : 0,
          //   borderTopLeftRadius: 35, // Adjust the value as needed
          //   borderTopRightRadius: 35, // Adjust the value as needed
          //   borderBottomLeftRadius: 35,
          //   borderBottomRightRadius: 35,
          //   marginBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <AntDesign
                name="home"
                size={28}
                color={focused ? Colors.UniLInkPrimary : Colors.Black}
              />
             
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <EvilIcons
                name="heart"
                size={38}
                color={focused ? Colors.UniLInkPrimary : Colors.Black}
              />
            </View>
          ),
          headerBackground: () => (
            <LinearGradient
              colors={["rgba(0, 0, 0, 0.9)", "rgba(0, 0, 0, 0.5)"]} // Colors for the gradient
              style={{ flex: 1 }} // Ensure gradient takes up the entire header
              start={[0, 0]} // Gradient start point (top-left)
              end={[0, 1]} // Gradient end point (bottom-left)
            />
          ),
          headerStyle: {
            backgroundColor: "transparent", // Set a transparent background
            borderBottomWidth: 0, // Remove the bottom border
          },
          headerTitleStyle: {
            color: "white", // Set the text color to white
          },
          headerTitleAlign: "center", // Center-align the header title
        }}
      />

      {/* <Tab.Screen
        name="UploadScreen"
        component={UploadScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="plus"
              size={34}
              color={focused ? Colors.White : Colors.White}
            />
            
          ),
          tabBarButton: (props) => <CustomtabbarButton {...props} />,
        }}
      /> */}
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons
                name="notifications-outline"
                size={28}
                color={focused ? Colors.UniLInkPrimary : Colors.Black}
              />
              {/* <Image
                source={require("../Compenents/Assets/icon/message.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused
                    ? Colors.MoveSecondary
                    : Colors.MovePrimary,
                }}
              /> */}
            </View>
          ),
          headerBackground: () => (
            <LinearGradient
              colors={["rgba(0, 0, 0, 0.9)", "rgba(0, 0, 0, 0.5)"]} // Colors for the gradient
              style={{ flex: 1 }} // Ensure gradient takes up the entire header
              start={[0, 0]} // Gradient start point (top-left)
              end={[0, 1]} // Gradient end point (bottom-left)
            />
          ),
          headerStyle: {
            backgroundColor: "transparent", // Set a transparent background
            borderBottomWidth: 0, // Remove the bottom border
          },
          headerTitleStyle: {
            color: "white", // Set the text color to white
          },
          headerTitleAlign: "center", // Center-align the header title
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <EvilIcons
                name="user"
                size={38}
                color={focused ? Colors.UniLInkPrimary : Colors.Black}
              />
              {/* <Image
                source={require("../Compenents/Assets/icon/profile.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? Colors.MoveSecondary : Colors.Black,
                }}
              /> */}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottombar;

const styles = StyleSheet.create({});
