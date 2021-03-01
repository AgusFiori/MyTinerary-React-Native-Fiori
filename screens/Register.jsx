import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  Pressable,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { connect } from "react-redux";
import authActions from "../redux/actions/authActions";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

const Register = (props) => {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    confirmation: "",
    email: "",
    firstname: "",
    lastname: "",
    urlPic: "http://cdn.onlinewebfonts.com/svg/img_264570.png",
    country: selectedCountry,
  });
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [errors, setErrors] = useState([]);

  const cargarPais = (value) => {
    setSelectedCountry(value);
    setNewUser({ ...newUser, country: value });
  };

  const register = async () => {
    const respuesta = await props.signUp(newUser);
    console.log(respuesta.errors.details);
    if (!respuesta.success) {
      respuesta.errors.details.map((error) => setErrors(error.message));
      alert(errors);
    }
  };

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data));
  }, []);

  return (
    <View style={{ backgroundColor: "white", height: "100%", paddingTop: 100 }}>
      <ScrollView>
        <StatusBar style="auto" />
        <View
          style={{
            height: 650,
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
              marginBottom: 50,
            }}
          ></ImageBackground>
          <View
            style={{
              backgroundColor: "white",
              height: "60%",
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
              onChangeText={(value) =>
                setNewUser({ ...newUser, username: value })
              }
            />
            <TextInput
              secureTextEntry={true}
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
              placeholder="Password"
              onChangeText={(value) =>
                setNewUser({ ...newUser, password: value })
              }
            />
            <TextInput
              secureTextEntry={true}
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
              placeholder="Confirm your password"
              onChangeText={(value) =>
                setNewUser({ ...newUser, confirmation: value })
              }
            />
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
              placeholder="Email"
              onChangeText={(value) => setNewUser({ ...newUser, email: value })}
            />
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
              placeholder="First name"
              onChangeText={(value) =>
                setNewUser({ ...newUser, firstname: value })
              }
            />
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                width: "90%",
                padding: 5,
                borderTopWidth: 0,
                borderRightWidth: 0,
                borderLeftWidth: 0,
              }}
              placeholder="Last name"
              onChangeText={(value) =>
                setNewUser({ ...newUser, lastname: value })
              }
            />
          </View>
          <Picker
            onValueChange={(value) => {
              cargarPais(value);
            }}
            selectedValue={selectedCountry}
          >
            <Picker.Item label="Please select an option..." value="0" />
            {countries.map((country) => (
              <Picker.Item
                label={country.name}
                value={country.name}
                key={country.numericCode}
              />
            ))}
          </Picker>
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
              onPress={register}
            >
              <Text style={{ color: "white" }}>Register</Text>
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
            >
              <Text
                style={{ color: "purple", textDecorationLine: "underline" }}
              >
                Forgot your password?
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapDispatchToProps = {
  signUp: authActions.signUp,
};

export default connect(null, mapDispatchToProps)(Register);
