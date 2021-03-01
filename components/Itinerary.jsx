import React, { useState } from "react";
import { Button, Image, Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import userActions from "../redux/actions/userActions";
import IconF from "react-native-vector-icons/FontAwesome5";
import { TextInput } from "react-native-gesture-handler";

const Itinerary = (props) => {
  const [visible, setVisible] = useState(false);
  const [comment, setComment] = useState({});

  const like = async () => {
    await props.likeItinerary(
      props.props._id,
      props.loggedUser.token,
      props.props.cityId._id
    );
  };

  const dislike = async () => {
    await props.dislikeItinerary(
      props.props._id,
      props.loggedUser.token,
      props.props.cityId._id
    );
  };

  const postComment = async () => {
    if (props.loggedUser) {
      setComment({
        ...comment,
        id: props.loggedUser.id,
        name: props.loggedUser.firstname,
        urlPic: props.loggedUser.urlPic,
        token: props.loggedUser.token,
        cityId: props.props._id,
      });
      await props.postComment(comment);
    }
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
              <View style={{ backgroundColor: "white" }}>
                <Icon
                  name="heart"
                  size={30}
                  color="darkred"
                  onPress={dislike}
                />
              </View>
            ) : (
              <View style={{ backgroundColor: "white" }}>
                <IconF name="heart" size={30} color="darkred" onPress={like} />
              </View>
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
        <Text>{props.props.duration}hs</Text>
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
        {visible && (
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
                  <Text style={{ textAlign: "center" }}>
                    {comment.username}
                  </Text>
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

            <View
              style={{
                backgroundColor: "white",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TextInput
                style={{
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 1,
                  marginBottom: 20,
                  width: "70%",
                  padding: 5,
                  borderTopWidth: 0,
                  borderRightWidth: 0,
                  borderLeftWidth: 0,
                  marginRight: 15,
                }}
                placeholder="Enter comment"
                name="comment"
                editable={props.loggedUser ? true : false}
                onChangeText={(comment) => setComment({ comment: comment })}
              />
              <Button title="send" onPress={postComment}></Button>
            </View>
          </View>
        )}
        <Pressable
          onPress={() => setVisible(!visible)}
          style={{
            backgroundColor: "orange",
            width: "100%",
            alignItems: "center",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            padding: 10,
          }}
        >
          <Text>View {visible ? "Less" : "More"}</Text>
        </Pressable>
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
