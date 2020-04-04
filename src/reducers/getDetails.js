import serieDetails from '../actions/serieDetails';

export default (state = {}, action) => {
  switch (action.type) {
    case serieDetails.WILL_GET_DETAILS:
      return {
        ...state,
        gettingDetails: true,
      };

    case serieDetails.DID_GET_DETAILS:
      return {
        ...state,
        gettingDetails: false,
        serieDetails: action.payload,
      };

    case serieDetails.FAILED_TO_GET_DETAILS:
      return {
        ...state,
        gettingDetails: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
