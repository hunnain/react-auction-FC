import { combineReducers, createStore } from 'redux';
import UserReducer from './../Reducers/UserReducer';

const rootReducer = combineReducers({
  User: UserReducer,
});

const configureStore = () => {
  let store = createStore(rootReducer);
  return { store };
};

export default configureStore;
