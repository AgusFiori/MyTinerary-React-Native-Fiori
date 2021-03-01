import AsyncStorage from "@react-native-async-storage/async-storage";
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
  Button,
} from "react-native";
import { connect } from "react-redux";
import Carousel from "../components/Carousel.jsx";
import authActions from "../redux/actions/authActions.js";
import { styles } from "../styles/styles";

const Home = (props) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <ScrollView>
        <StatusBar style="auto" />

        <View style={styles.containerHome}>
          <View style={styles.homeBannerCtn}>
            <ImageBackground
              source={require("../assets/homepage/arc-de-triomph.jpg")}
              style={styles.homeBanner}
            >
              <ImageBackground
                source={require("../assets/homepage/MyTinerary-Logo-c.png")}
                resizeMode={"contain"}
                style={{
                  backgroundColor: "#ffffffa0",
                  height: "30%",
                  width: undefined,
                  height: 50,
                }}
              ></ImageBackground>
            </ImageBackground>
          </View>
        </View>
        <View style={styles.homeBodyCtn}>
          <View style={styles.callToActionCtn}>
            <View
              style={{
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Text style={styles.callTitle}>Find the best out there</Text>
            </View>
            <Pressable
              style={{
                width: "88%",
                backgroundColor: "#007aff",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                borderRadius: 8,
                borderColor: "black",
                borderWidth: 1,
              }}
              onPress={() => props.navigation.navigate("Cities")}
            >
              <Text style={{ color: "white" }}>Explore Cities</Text>
            </Pressable>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/homepage/home_hero_got_illustration.jpg")}
            style={{ width: "100%", height: 200, resizeMode: "contain" }}
          ></Image>
        </View>

        <View
          style={{
            backgroundColor: "white",
            height: 600,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Text
            style={{
              height: "10%",
              fontSize: 27,
              paddingLeft: 20,
              paddingRight: 20,
              borderBottomWidth: 1,
              borderColor: "grey",
              fontWeight: "bold",
              textShadowColor: "rgba(0, 0, 0, 0.75)",
              textShadowOffset: { width: 0, height: 1 },
              textShadowRadius: 5,
            }}
          >
            Popular Mytineraries
          </Text>
          <Carousel />
        </View>

        <View
          style={{
            backgroundColor: "#7446af",
            height: 70,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Text style={{ color: "white" }}>FOOTER</Text>
        </View>
      </ScrollView>
    </View>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     loggedUser: state.authR.loggedUser,
//   };
// };

const mapDispatchToProps = {
  logout: authActions.logout,
};

export default connect(null, mapDispatchToProps)(Home);
