import Axios from 'axios';
import { API_KEY, API_LINK } from 'react-native-dotenv';

const serieDetails = {
  WILL_GET_DETAILS: 'serieDetails/WILL_GET_DETAILS',
  DID_GET_DETAILS: 'serieDetails/DID_GET_DETAILS',
  FAILED_TO_GET_DETAILS: 'serieDetails/FAILED_TO_GET_DETAILS',
  CLEAR_DETAILS: 'serieDetails/CLEAR_DETAILS',
};

export default serieDetails;

export const getDetails = (id) => (dispatch) => {
  dispatch({
    type: serieDetails.WILL_GET_DETAILS,
  });

  const getDetailsUrl = `${API_LINK}` + `tv/${id}?api_key=` + `${API_KEY}`;

  Axios.get(getDetailsUrl)
    .then((res) => {
      dispatch({
        type: serieDetails.DID_GET_DETAILS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: serieDetails.FAILED_TO_GET_DETAILS,
        error: error,
      });
    });
};

export const clearDetails = () => (dispatch) => {
  dispatch({
    type: serieDetails.CLEAR_DETAILS,
  });
};
