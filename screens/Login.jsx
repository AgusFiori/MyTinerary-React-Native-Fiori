import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  Pressable,
  Button,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import authActions from "../redux/actions/authActions";

const Login = (props) => {
  const [hiddenPassword, sethiddenPassword] = useState(true);
  const [userToLog, setUserToLog] = useState({ username: "", password: "" });

  const signIn = () => {
    props.login(userToLog);

    AsyncStorage.getItem("id").then((info) => console.log(info));

    // if (!!AsyncStorage.getItem("id").then((info) => info)) {
    //   props.navigation.navigate("Home");
    //   AsyncStorage.getItem("id").then((info) => console.log(info));
    // } else {
    //   AsyncStorage.getItem("id").then((info) => console.log(!!info));
    //   alert("error");
    // }
  };

  return (
    <View style={{ backgroundColor: "white", height: "100%", paddingTop: 100 }}>
      <ScrollView>
        <StatusBar style="auto" />
        <View
          style={{
            height: 450,
            justifyContent: "space-between",
          }}
        >
          <ImageBackground
            source={require("../assets/homepage/MyTinerary-Logo-c.png")}
            resizeMode={"contain"}
            style={{
              backgroundColor: "#ffffffa0",
              height: "30%",
              width: undefined,
              height: 50,
              marginTop: 50,
            }}
          ></ImageBackground>
          <View
            style={{
              backgroundColor: "white",
              height: 100,
              width: "100%",
              alignItems: "center",
            }}
          >
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                marginBottom: 20,
                width: "90%",
                padding: 5,
                borderTopWidth: 0,
                borderRightWidth: 0,
                borderLeftWidth: 0,
              }}
              placeholder="Username"
              name="username"
              onChangeText={(value) =>
                setUserToLog({ ...userToLog, username: value })
              }
            />
            <View style={{ flexDirection: "row" }}>
              <TextInput
                secureTextEntry={hiddenPassword}
                style={{
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 12,
                  width: "90%",
                  padding: 5,
                  borderTopWidth: 0,
                  borderRightWidth: 0,
                  borderLeftWidth: 0,
                }}
                placeholder="Password"
                name="password"
                onChangeText={(value) =>
                  setUserToLog({ ...userToLog, password: value })
                }
              />
              <Text
                style={{
                  zIndex: 3,
                  position: "absolute",
                  right: 10,
                  bottom: 10,
                }}
                onPress={() => sethiddenPassword(!hiddenPassword)}
              >
                <Icon
                  name="eye"
                  size={21}
                  color={`${hiddenPassword ? "black" : "grey"}`}
                />
              </Text>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
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
                marginBottom: 30,
              }}
              onPress={signIn}
            >
              <Text style={{ color: "white" }}>Login</Text>
            </Pressable>
            <Pressable
              style={{
                width: "88%",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                borderRadius: 8,
                borderColor: "black",
              }}
              onPress={() => props.navigation.navigate("Register")}
            >
              <Text
                style={{ color: "purple", textDecorationLine: "underline" }}
              >
                Don't have an account yet?
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapDispatchToProps = {
  login: authActions.login,
};

export default connect(null, mapDispatchToProps)(Login);
