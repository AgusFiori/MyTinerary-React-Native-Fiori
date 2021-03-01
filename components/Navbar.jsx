import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  Alert,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Carousel from "./Carousel.jsx";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  const onHamburguerClick = () => {
    setVisible(!visible);
  };

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        flex: 1,
        alignSelf: "stretch",
        right: 0,
        left: 0,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          height: 50,
          marginTop: "10%",
          justifyContent: "space-between",
          padding: 10,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={onHamburguerClick}>
          <Icon name="bars" size={35} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 24 }}>Home</Text>
        <TouchableOpacity onPress={onHamburguerClick}>
          <Icon name="info" size={35} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
