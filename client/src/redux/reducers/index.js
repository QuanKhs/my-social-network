import { combineReducers } from 'redux';
import auth from 'redux/reducers/authReducer';
import alert from 'redux/reducers/alertReducer';

export default combineReducers({
    auth,
    alert,
});