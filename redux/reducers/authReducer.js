import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  loggedUser: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_USER":
      if (action.payload.success) {
        AsyncStorage.setItem("firstname", action.payload.respuesta.firstname);
        AsyncStorage.setItem("urlPic", action.payload.respuesta.urlPic);
        AsyncStorage.setItem("token", action.payload.respuesta.token);
        AsyncStorage.setItem("id", action.payload.respuesta.id)
      }
      return {
        ...state,
        loggedUser: action.payload.respuesta,
      };
    case "LOGOUT":
      AsyncStorage.clear();
      return {
        ...state,
        loggedUser: null,
      };
    default:
      return state;
  }
};

module.exports = authReducer;
