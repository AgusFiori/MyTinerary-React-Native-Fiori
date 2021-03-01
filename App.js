import 'react-native-gesture-handler';
import React, { useState } from 'react';
import Home from './screens/Home.jsx'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cities from './screens/Cities.jsx';
import City from './screens/City.jsx';
import Register from './screens/Register.jsx';
import Login from './screens/Login.jsx'
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import { connect, Provider } from "react-redux";
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import authActions from './redux/actions/authActions.js';
import NotApp from './NotApp.jsx';



const App = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <NotApp />
    </Provider>
  );
}

// const mapDispatchToProps = {
//   logout: authActions.logout
// }

// export default connect(null, mapDispatchToProps)(App);

export default App