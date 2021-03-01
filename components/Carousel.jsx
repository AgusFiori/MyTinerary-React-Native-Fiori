import React, { useState, useCallback, useRef } from "react";
import { Text, View, SafeAreaView, Image, ImageBackground } from "react-native";

import Carousel from "react-native-snap-carousel";

const exampleItems = [
  {
    img: require("../assets/carouselPics/London.jpg"),
    title: "London",
    text: "Text 1",
  },
  {
    img: require("../assets/carouselPics/Paris.jpg"),
    title: "Paris",
    text: "Text 2",
  },
  {
    img: require("../assets/carouselPics/Rome.jpg"),
    title: "Rome",
    text: "Text 3",
  },
  {
    img: require("../assets/carouselPics/Singapore.jpg"),
    title: "Singapore",
    text: "Text 4",
  },
  {
    img: require("../assets/carouselPics/Dubai.jpg"),
    title: "Dubai",
    text: "Text 5",
  },
];

const CustomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(exampleItems);
  const ref = useRef(null);

  const renderItem = useCallback(
    ({ item, index }) => (
      <View
        style={{
          backgroundColor: "black",
          borderRadius: 21,
          height: 400,
          padding: 3,
          width: "88%",
          marginLeft: 25,
          marginRight: 25,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          elevation: 24,
        }}
      >
        <ImageBackground
          source={item.img}
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          imageStyle={{ borderRadius: 18 }}
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
            {item.title}
          </Text>
        </ImageBackground>
      </View>
    ),
    []
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: 50,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Carousel
          layout="default"
          ref={ref}
          data={carouselItems}
          sliderWidth={420}
          itemWidth={250}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomCarousel;
