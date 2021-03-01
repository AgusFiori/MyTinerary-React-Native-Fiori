import axios from "axios";

const itinerariesActions = {
  //accion par obtener todas las ciudades
  getItineraries: (id) => {
    return async (dispatch, getState) => {
      const respuesta = await axios.get(
        `https://mytinerary-cities.herokuapp.com/itineraries/${id}`
      );
      const itineraries = respuesta.data.respuesta;

      dispatch({
        type: "GET_ITINERARIES",
        payload: itineraries,
      });
    };
  },
};

export default itinerariesActions;
