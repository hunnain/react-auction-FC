import {
  SET_FILTERVALUESLIST_CORPORATE_ACTION,
  SET_FILTERVALUESLIST,
  SET_SAVESEARCHLIST
} from '../Types/Types';


export const setSaveSearch = value => {
  return {
    type: SET_SAVESEARCHLIST,
    payload: value
  }
}
export const setFilterValues = value => {
  return {
    type: SET_FILTERVALUESLIST,
    payload: value
  }
}
export const setFilterCorporateValues = value => {
  return {
    type: SET_FILTERVALUESLIST_CORPORATE_ACTION,
    payload: value
  }
}
