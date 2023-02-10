import { combineReducers } from 'redux';
import localeReducer from './localeReducer';
import themeReducer from './themeReducer';
import authReducer from './authReducer';

export default combineReducers({
  locale: localeReducer,
  theme: themeReducer,
  auth: authReducer,
});
