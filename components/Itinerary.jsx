import React from "react";
import { Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import userActions from "../redux/actions/userActions";
import IconF from "react-native-vector-icons/FontAwesome5";

const Itinerary = (props) => {
  console.log(props);

  const like = async () => {
    await props.likeItinerary(
      props.props.itinerary._id,
      props.loggedUser.token,
      props.props.itinerary.cityId._id
    );
  };

  const dislike = async () => {
    await props.dislikeItinerary(
      props.props.itinerary._id,
      props.loggedUser.token,
      props.props.itinerary.cityId._id
    );
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        marginTop: 30,
        height: undefined,
        borderWidth: 2,
        borderRadius: 12,
      }}
    >
      <View style={{ alignItems: "center", padding: 10 }}>
        <Text style={{ fontSize: 21 }}>{props.props.title}</Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          alignItems: "center",
          height: 130,
        }}
      >
        <Image
          source={{ uri: `${props.props.authorPic}` }}
          resizeMode="cover"
          style={{
            width: 80,
            height: 80,
            backgroundColor: "white",
            borderRadius: 100,
            borderWidth: 1,
          }}
        ></Image>
        <Text>{props.props.authorName}</Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: 50,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {props.loggedUser ? (
            props.props.likes.find((like) => like === props.loggedUser.id) ? (
              <Icon name="heart" size={15} color="darkred" />
            ) : (
              <IconF name="heart" size={15} color="darkred" onPress={dislike} />
            )
          ) : (
            <View style={{ backgroundColor: "white" }}>
              <IconF
                name="heart"
                size={30}
                color="darkred"
                onPress={() => alert("Must be logged in")}
              />
            </View>
          )}
          <Text style={{ fontSize: 21 }}>{props.props.likes.length}</Text>
        </Text>
        <Text>{props.props.likes.length}hs</Text>
        <Text>
          {Array(props.props.budget).fill(
            <Icon name="money" size={15} color="darkgreen" />
          )}
        </Text>
        <Text>
          {props.props.accesibility ? (
            <Icon name="wheelchair" size={15} color="blue" />
          ) : (
            <Icon name="wheelchair" size={15} color="blue" />
          )}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 10,
        }}
      >
        {props.props.hashtags.map((hashtag) => (
          <Text>#{hashtag}</Text>
        ))}
      </View>
      <View
        style={{
          backgroundColor: "white",
          height: 100,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {props.props.activities.map((activity) => (
          <>
            <Image
              source={{ uri: `${activity.img}` }}
              resizeMode="cover"
              style={{
                height: 100,
                width: 100,
                backgroundColor: "white",
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              }}
            ></Image>
          </>
        ))}
      </View>
      <View
        style={{
          backgroundColor: "white",
          height: 100,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {props.props.activities.map((activity) => (
          <View>
            <Text
              style={{
                backgroundColor: "lightgrey",
                fontSize: 12,
                height: 90,
                width: 100,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
                textAlign: "center",
                padding: 5,
              }}
            >
              {activity.activity}
            </Text>
          </View>
        ))}
      </View>
      <View>
        <View
          style={{
            backgroundColor: "white",
            borderTopWidth: 1,
            margin: 10,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <Text style={{ fontSize: 21 }}>Comments</Text>
        </View>
        <View>
          {props.props.comments.map((comment) => (
            <View
              style={{
                flexDirection: "row",
                height: 150,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "lightgrey",
                  width: 100,
                  marginBottom: 10,
                  padding: 10,
                  borderTopLeftRadius: 12,
                  borderBottomLeftRadius: 12,
                }}
              >
                <View
                  style={{
                    borderRadius: 23,
                    alignSelf: "center",
                    width: 50,
                  }}
                >
                  <Image
                    source={{ uri: `${comment.avatar}` }}
                    resizeMode="cover"
                    style={{
                      height: 50,
                      backgroundColor: "white",
                      borderRadius: 30,
                      borderWidth: 1,
                    }}
                  ></Image>
                </View>
                <Text style={{ textAlign: "center" }}>{comment.username}</Text>
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  width: 250,
                  borderWidth: 1,
                  marginBottom: 10,
                  borderTopRightRadius: 12,
                  borderBottomRightRadius: 12,
                  padding: 12,
                }}
              >
                <Text>{comment.comment}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedUser: state.authR.loggedUser,
  };
};

const mapDispatchToProps = {
  postComment: userActions.postComment,
  getItineraries: itinerariesActions.getItineraries,
  getComments: userActions.getComments,
  likeItinerary: userActions.likeItinerary,
  dislikeItinerary: userActions.dislikeItinerary,
};

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
