/* eslint-disable quotes */
/* eslint-disable comma-dangle */
import {
  setSaveSearch,
  setFilterCorporateValues,
  setFilterValues
} from "./../Actions/UserActions";
export const mapStateToProps = state => {
  return {
    saveSearch: state.User.saveSearch,
    filterValues: state.User.filterValues,
    filterCorporateValues: state.User.filterCorporateValues,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    setSaveSearch: (value) => {
      dispatch(setSaveSearch(value));
    },
    setFilterValues: (value) => {
      dispatch(setFilterValues(value));
    },
    setFilterCorporateValues: (value) => {
      dispatch(setFilterCorporateValues(value));
    },
  };
};
