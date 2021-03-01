import axios from "axios";

const usersActions = {
  postComment: (comment) => {
    const { id, name, urlPic, token, cityId } = comment;
    const actualComment = comment.comment;
    return async (dispatch, getState) => {
      const respuesta = await axios.post(
        `https://mytinerary-cities.herokuapp.com/itinerary/${id}`,
        { actualComment, name, urlPic },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (respuesta.data.success === true) {
        const respuesta = await axios.get(
          `https://mytinerary-cities.herokuapp.com/itineraries/${cityId}`
        );
        dispatch({
          type: "GET_ITINERARIES",
          payload: respuesta.data.respuesta,
        });
      }
    };
  },
  deleteComment: (commentId, itineraryId, token, cityId) => {
    return async (dispatch, getState) => {
      const respuesta = await axios.delete(
        `https://mytinerary-cities.herokuapp.com/itinerary/${itineraryId}/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (respuesta.data.success === true) {

        const respuesta = await axios.get(
          `https://mytinerary-cities.herokuapp.com/itineraries/${cityId}`
        );
        dispatch({
          type: "GET_ITINERARIES",
          payload: respuesta.data.respuesta,
        });
      }
    };
  },
  likeItinerary: (itineraryId, token, cityId) => {
    return async (dispatch, getState) => {
      const respuesta = await axios.post(
        `https://mytinerary-cities.herokuapp.com/itinerary/like/${itineraryId}`,
        { token },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (respuesta.data.success === true) {
        const respuesta = await axios.get(
          `https://mytinerary-cities.herokuapp.com/itineraries/${cityId}`
        );
        dispatch({
          type: "GET_ITINERARIES",
          payload: respuesta.data.respuesta,
        });
      }
    };
  },
  dislikeItinerary: (itineraryId, token, cityId) => {
    return async (dispatch, getState) => {
      const respuesta = await axios.post(
        `https://mytinerary-cities.herokuapp.com/itinerary/dislike/${itineraryId}`,
        { token },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (respuesta.data.success === true) {
        const respuesta = await axios.get(
          `https://mytinerary-cities.herokuapp.com/itineraries/${cityId}`
        );
        dispatch({
          type: "GET_ITINERARIES",
          payload: respuesta.data.respuesta,
        });
      }
    };
  },
  editComment: (commentToEdit) => {
    return async (dispatch, getState) => {
      const respuesta = await axios.put(
        `https://mytinerary-cities.herokuapp.com/itinerary/${commentToEdit.id}`,
        { commentToEdit },
        {
          headers: {
            Authorization: `Bearer ${commentToEdit.token}`,
          },
        }
      );
      if (respuesta.data.success === true) {
        const respuesta = await axios.get(
          `https://mytinerary-cities.herokuapp.com/itineraries/${commentToEdit.cityId}`
        );
        dispatch({
          type: "GET_ITINERARIES",
          payload: respuesta.data.respuesta,
        });
      }
    };
  },
};

export default usersActions;
