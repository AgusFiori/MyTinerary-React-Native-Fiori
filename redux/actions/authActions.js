import axios from "axios";

const authActions = {
  signUp: (newUser) => {
    return async (dispatch, getState) => {
      const respuesta = await axios.post(
        "https://mytinerary-cities.herokuapp.com/register",
        newUser
      );
      if (!respuesta.data.success) {
        return respuesta.data;
      }
      dispatch({ type: "LOG_USER", payload: respuesta.data });
    };
  },
  logout: () => {
    return (dispatch, getState) => {
      dispatch({
        type: "LOGOUT",
      });
    };
  },
  login: (user) => {
    return async (dispatch, getState) => {
      const respuesta = await axios.post("https://mytinerary-cities.herokuapp.com/login", user);
      if (!respuesta.data.success) {
        return respuesta.data;
      }
      dispatch({
        type: "LOG_USER",
        payload: respuesta.data,
      });
    };
  },
  logFromLS: (token) => {
    return async (dispatch, getState) => {
      try {
        const respuesta = await axios.post(
          "https://mytinerary-cities.herokuapp.com/localstorage",
          { token },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        dispatch({
          type: "LOG_USER",
          payload: {
            respuesta: { ...respuesta.data.respuesta },
          },
        });
      } catch (error) {
        console.log(error)
      }
    };
  },
};

export default authActions;
