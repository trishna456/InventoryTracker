import {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
  GET_ITEM,
  SET_LOADING,
  CLEAR_FILTER,
  FILTER_ITEMS,
  SET_CURRENT,
  CLEAR_CURRENT,
  DATA_ERROR,
} from '../type';

export default (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        data: [action.payload, ...state.data],
        loading: false,
      };
    case GET_ITEM:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case UPDATE_ITEM:
      return {
        ...state,
        data: state.data.map((dataItem) =>
          dataItem.id === action.payload.id ? action.payload : dataItem
        ),
        loading: false,
      };
    case DELETE_ITEM:
      return {
        ...state,
        data: state.data.filter((dataItem) => {
          return dataItem._id !== action.payload;
        }),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_ITEMS:
      return {
        ...state,
        filtered: state.data.filter((dataItem) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return dataItem.VendorName.match(regex) || dataItem.Date.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case DATA_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
