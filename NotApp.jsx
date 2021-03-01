import "react-native-gesture-handler";
import React, { useState } from "react";
import Home from "./screens/Home.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Cities from "./screens/Cities.jsx";
import City from "./screens/City.jsx";
import Register from "./screens/Register.jsx";
import Login from "./screens/Login.jsx";
import { connect, Provider } from "react-redux";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import authActions from "./redux/actions/authActions.js";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View } from "react-native";

const NotApp = (props) => {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  const { logout } = props;

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          onPress={() => {
            logout(), props.navigation.closeDrawer();
          }}
        />
      </DrawerContentScrollView>
    );
  }

  const Pila = (props) => (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity
            padding
            transparent
            marginHorizontal
            onPress={() => props.navigation.openDrawer()}
          >
            <Icon
              name="bars"
              size={35}
              color="black"
              style={{ marginLeft: 5 }}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="Cities" component={Cities} />
      <Stack.Screen name="City" component={City} />
    </Stack.Navigator>
  );

  const { loggedUser } = props;

  const menuHambur = (props) => (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity
            padding
            transparent
            marginHorizontal
            onPress={() => props.navigation.openDrawer()}
          >
            <Icon
              name="bars"
              size={35}
              color="black"
              style={{ marginLeft: 5 }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View style={{ backgroundColor: "white", paddingRight: 10 }}>
            <Text style={{ fontSize: 14 }}>
              Hello, {loggedUser ? loggedUser.firstname : "Guest"}!
            </Text>
          </View>
        ),
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      {props.loggedUser ? (
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="Home" children={menuHambur} />
          <Drawer.Screen name="Cities" children={Pila} />
        </Drawer.Navigator>
      ) : (
        <Drawer.Navigator>
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Home" children={menuHambur} />
          <Drawer.Screen name="Cities" children={Pila} />
          <Drawer.Screen name="Register" component={Register} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedUser: state.authR.loggedUser,
  };
};

const mapDispatchToProps = {
  logout: authActions.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotApp);

// export default NotApp;
