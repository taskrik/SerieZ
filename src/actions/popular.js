import Axios from 'axios';
import { API_KEY, API_LINK } from 'react-native-dotenv';

const popular = {
  WILL_GET_SERIES: 'popular/WILL_GET_SERIES',
  DID_GET_SERIES: 'popular/DID_GET_SERIES',
  FAILED_TO_GET_SERIES: 'popular/FAILED_TO_GET_SERIES',

  DID_GET_POPULAR: 'popular/DID_GET_POPULAR',
  FAILED_TO_GET_POPULAR: 'popular/FAILED_TO_GET_POPULAR',

  DID_GET_TOP_RATED: 'popular/DID_GET_TOP_RATED',
  FAILED_TO_GET_TOP_RATED: 'popular/FAILED_TO_GET_TOP_RATED',
};

export default popular;

export const getSeries = () => (dispatch) => {
  dispatch({
    type: popular.WILL_GET_SERIES,
  });

  const popularUrl = `${API_LINK}` + 'tv/popular?api_key=' + `${API_KEY}`;
  const topRatedUrl = `${API_LINK}` + 'tv/top_rated?api_key=' + `${API_KEY}`;

  // Sets the get requests for axios
  const popularRequest = Axios.get(popularUrl);
  const topRatedRequest = Axios.get(topRatedUrl);

  Axios.all([popularRequest, topRatedRequest])
    .then(
      Axios.spread((...responses) => {
        const popularData = responses[0];
        const topRatedData = responses[1];
        if (popularData) {
          dispatch({
            type: popular.DID_GET_POPULAR,
            payload: popularData.data.results,
          });
        } else {
          dispatch({
            type: popular.FAILED_TO_GET_POPULAR,
            error: 'Failed to fetch popular',
          });
        }
        if (topRatedData) {
          dispatch({
            type: popular.DID_GET_TOP_RATED,
            payload: topRatedData.data.results,
          });
        } else {
          dispatch({
            type: popular.FAILED_TO_GET_TOP_RATED,
            error: 'Failed to fetch top rated',
          });
        }
        dispatch({
          type: popular.DID_GET_SERIES,
          payload: topRatedData.data.results,
        });
      }),
    )
    .catch((error) => {
      dispatch({
        type: popular.FAILED_TO_GET_SERIES,
        error: error,
      });
    });
};
