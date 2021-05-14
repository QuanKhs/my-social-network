import { combineReducers } from 'redux';
import auth from 'redux/reducers/authReducer';
import notify from 'redux/reducers/notifyReducer';

export default combineReducers({
    auth,
    notify,
});