import Axios from 'axios';
import { API_KEY, API_LINK } from 'react-native-dotenv';

const serieDetails = {
  WILL_GET_DETAILS: 'popular/WILL_GET_DETAILS',
  DID_GET_DETAILS: 'popular/DID_GET_DETAILS',
  FAILED_TO_GET_DETAILS: 'popular/FAILED_TO_GET_DETAILS',
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
