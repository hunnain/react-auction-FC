import {
  SET_FILTERVALUESLIST_CORPORATE_ACTION,
  SET_SAVESEARCHLIST,
  SET_FILTERVALUESLIST,
} from '../Types/Types';
const initialState = {
  saveSearch: [],
  filterValues:[],
  filterCorporateValues:[]
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SAVESEARCHLIST:
      return {
        ...state,
        saveSearch: action.payload
      }
    case SET_FILTERVALUESLIST:
      return {
        ...state,
        filterValues: action.payload
      }
    case SET_FILTERVALUESLIST_CORPORATE_ACTION:
      return {
        ...state,
        filterCorporateValues: action.payload
      }
    default:
      return state;
  }
};

export default UserReducer;
