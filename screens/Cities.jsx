import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  View,
  TextInput,
  Text,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";

const Cities = (props) => {
  useEffect(() => {
    props.getCities();
  }, []);

  // const showCity = (id) => {
  //   props.navigation.navigate("City", id);
  // };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ backgroundColor: "white", marginBottom: 50 }}>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            margin: 20,
            padding: 10,
            textAlign: "center",
            borderRadius: 12,
          }}
          onChangeText={(e) => props.filterCities(e)}
          placeholder="Search City..."
        />
        {props.allCities.length ? (
          props.filteredCities.length ? (
            props.filteredCities
              .sort((a, b) =>
                a.cityName > b.cityName ? 1 : b.cityName > a.cityName ? -1 : 0
              )
              .map((city) => (
                <Pressable
                  key={city._id}
                  onPress={() =>
                    props.navigation.navigate("City", { id: city._id })
                  }
                >
                  <View
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingLeft: 30,
                      paddingRight: 30,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: "100%",
                        height: 120,
                        marginTop: 35,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 12,
                      }}
                      imageStyle={{ borderRadius: 10 }}
                      source={{ uri: `${city.cityPic}` }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 21,
                          fontWeight: "bold",
                          textAlign: "center",
                          backgroundColor: "#000000a0",
                          width: "100%",
                          padding: 5,
                        }}
                      >
                        {city.cityName}
                      </Text>
                    </ImageBackground>
                  </View>
                </Pressable>
              ))
          ) : (
            <View
              style={{
                backgroundColor: "white",
                height: 100,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ borderWidth: 1, padding: 30, borderRadius: 8 }}>
                No cities found!
              </Text>
            </View>
          )
        ) : (
          <View
            style={{
              backgroundColor: "white",
              width: "100%",
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size="large" color="orange" />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    allCities: state.cityR.cities,
    filteredCities: state.cityR.filteredCities,
  };
};

const mapDispatchToProps = {
  // trae la posibilidad de despachar la action
  getCities: citiesActions.getCities,
  filterCities: citiesActions.filterCities,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
