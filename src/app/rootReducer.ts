import { combineReducers } from 'redux';
import todos from './store/todos';

// we connect to redux the type of data we want to share with every application
export default combineReducers({
    todos
});