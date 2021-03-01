import React, { useEffect, useState } from "react";
import { ImageBackground, View, Text, Pressable } from "react-native";
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import citiesActions from "../redux/actions/citiesActions";
import Itinerary from "../components/Itinerary.jsx";
import { ScrollView } from "react-native-gesture-handler";

const City = (props) => {
  console.log(props.loggedUser);
  const { id } = props.route.params;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    await props.getItineraries(id);
    await props.getCity(id);
  }

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ height: "100%", backgroundColor: "white" }}>
        <View style={{ height: 200 }}>
          <ImageBackground
            source={{ uri: `${props.city.cityPic}` }}
            resizeMode={"cover"}
            style={{
              flex: 1,
              backgroundColor: "#ffffffa0",
              height: 200,
              width: "100%",
              justifyContent: "center",
            }}
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
              {props.city.cityName}
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 10,
            height: "100%",
          }}
        >
          {props.allItineraries.length ? (
            props.allItineraries.map((props) => (
              <Itinerary props={props} key={props._id} />
            ))
          ) : (
            <View
              style={{
                height: 100,
                justifyContent: "center",
                borderWidth: 1,
                borderRadius: 12,
                marginTop: 50,
              }}
            >
              <Text style={{ textAlign: "center" }}>No itineraries yet :(</Text>
            </View>
          )}
          <Pressable
            style={{
              backgroundColor: "#007aff",
              height: 50,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
              borderRadius: 12,
            }}
            onPress={() => props.navigation.navigate("Cities")}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Back to Cities</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    allItineraries: state.itineraryR.itineraries,
    cities: state.cityR.cities,
    city: state.cityR.city,
    loggedUser: state.authR.loggedUser,
  };
};

const mapDispatchToProps = {
  getItineraries: itinerariesActions.getItineraries,
  getCity: citiesActions.getCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
