import series from '../actions/getSeries';

export default (state = {}, action) => {
  switch (action.type) {
    case series.WILL_GET_SERIES:
      return {
        ...state,
        gettingSeries: true,
        gettingPopular: true,
        gettingTopRated: true,
      };

    case series.DID_GET_POPULAR:
      return {
        ...state,
        gettingPopular: false,
        popularSeries: action.payload,
      };

    case series.DID_GET_TOP_RATED:
      return {
        ...state,
        gettingTopRated: false,
        topRatedSeries: action.payload,
      };

    case series.DID_GET_SERIES:
      return {
        ...state,
        gettingSeries: false,
      };

    case series.FAILED_TO_GET_SERIES:
      return {
        ...state,
        gettingSeries: false,
        error: action.payload,
      };

    case series.FAILED_TO_GET_POPULAR:
      return {
        ...state,
        gettingPopular: false,
        error: action.payload,
      };

    case series.FAILED_TO_GET_TOP_RATED:
      return {
        ...state,
        gettingTopRated: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
